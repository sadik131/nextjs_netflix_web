import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const result = await prisma.user.findFirst({
            where: { email: data.email }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function GET() {
    try {
        const result = await prisma.user.findMany({})
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}