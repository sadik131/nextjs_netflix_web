import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const result = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            }
        })
        return NextResponse.json({ status: 200, message: "User create" })
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }
}