import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.movies.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                thumbnail: true,
                movieUrl: true,
                duration:true,
                genre: true,
                age:true,
                release: true,
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
        const result = await prisma.movies.create({
            data: {
                title: data.title,
                description: data.description,
                thumbnail: data.thumbnail,
                movieUrl: data.movieUrl,
                genre: data.genre,
                release: new Date(data.release),
                age:data.age,
                duration:data.duration
            }
        })
        console.log(result)
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}
