import { prisma } from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const data = await req.json()

        console.log(data)
        const result = await prisma.movies.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                thumbnail: data.thumbnail,
                movieUrl: data.movieUrl,
                genre: data.genre,
                release: new Date(data.release)
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const result = await prisma.movies.delete({
            where: { id }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }
}