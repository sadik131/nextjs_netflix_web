import { prisma } from "@/utils/prisma"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession()

        const user = await prisma.user.findFirst({ where: { email: session?.user?.email! } })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const result = await prisma.favorites.findMany({
            where: { userId: user.id },
            include: {
                movie: true
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()

        const session = await getServerSession()

        const user = await prisma.user.findFirst({ where: { email: session?.user?.email! } })
        
        const existFev = await prisma.favorites.findFirst({
            where: {
                movieId: data.id,
                userId: user?.id
            }
        })
        if (existFev) {
            const result = await prisma.favorites.delete({ where: { id: existFev.id } })
            return NextResponse.json(result)
        }
        const result = await prisma.favorites.create({
            data: {
                movieId: data.id,
                userId: user?.id
            },
        })
        console.log(result);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}
