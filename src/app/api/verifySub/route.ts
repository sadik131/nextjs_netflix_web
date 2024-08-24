import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
    const session = await getServerSession();
    
    if (!session || !session.user?.email) {
        return NextResponse.json({ error: 'Not authenticated' });
    }
    
    const user = await prisma.subscription.findFirst({
        where: { userEmail: session.user.email }
    });
    if (user && user.status === "active") {
        const isSubscriptionActive = user.endDate > new Date();
        if (isSubscriptionActive) {
            return NextResponse.json({ access: true });
        }
    }

    return NextResponse.json({ access: false });
}
