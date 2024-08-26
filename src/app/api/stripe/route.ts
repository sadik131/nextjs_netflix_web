import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

const stripe = new Stripe(process.env.NEXTJS_STRIPE_SECRET!, { apiVersion: '2024-06-20' });

export async function POST(req: NextRequest) {
    const session = await getServerSession()

    if (!session || !session.user?.email) {
        return NextResponse.json({ error: 'Not authenticated' });
    }

    const { priceId } = await req.json();
    try {
        const stripeSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'subscription',
            success_url: `${process.env.FRONTEND_URL}`,
            cancel_url: `${process.env.FRONTEND_URL}/pages/cancel`,
            customer_email: session.user.email,
        });

        return NextResponse.json({ url: stripeSession.url });
    } catch (error) {
        return NextResponse.json(error);
    }
}

export async function GET() {
    try {
        const plans = await stripe.prices.list({
            active: true,
            expand: ['data.product'],
        });
        return NextResponse.json(plans);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    }
}