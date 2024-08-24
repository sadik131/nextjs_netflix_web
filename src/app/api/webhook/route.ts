import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";

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
    const sig = req.headers.get('stripe-signature');

    let event;

    try {
        const rawBody = (req as any).rawBody;
        const sig = req.headers.get('stripe-signature') as string;

        event = stripe.webhooks.constructEvent(rawBody, sig!, process.env.STRIPE_WEBHOOK_SECRET!);

        console.log("Received event:", event);
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;
            console.log("Session data:", session);

            try {
                await prisma.subscription.create({
                    data: {
                        userEmail: session.customer_email!,
                        stripeId: session.id,
                        status: 'active',
                        startDate: new Date(),
                        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                    },
                });
                console.log("all done", session.customer_email);
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
