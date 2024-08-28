import { prisma } from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const data = await req.json()
        const result = await prisma.user.update({
            where: { id },
            data: data
        })
        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error)
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const result = await prisma.user.delete({
            where: { id }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}