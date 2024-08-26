import { prisma } from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const result = await prisma.favorites.delete({
            where: { id }
        })
        console.log(result);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}