import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXTJS_STRIPE_SECRET!, {
    apiVersion: '2024-06-20',
});

// Disable Next.js's default body parsing to get the raw body
export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: NextRequest) {
    let event;

    try {

        const data = await req.json()
        if (data.type === 'checkout.session.completed') {

            try {
                await prisma.subscription.create({
                    data: {
                        userEmail: data.data.object.customer_email,
                        stripeId: data.data.object.id,
                        status: 'active',
                        startDate: new Date(),
                        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    },
                });
                return NextResponse.json({ received: true });
            } catch (error) {
                console.error("Error saving subscription:", error);
            }
        }

    } catch (err) {
        console.error(`Error verifying webhook signature:`, err);
        return NextResponse.json({ error: 'Webhook verification failed' });
    }
}



