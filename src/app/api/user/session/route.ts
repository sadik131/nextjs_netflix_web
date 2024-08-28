import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { startTime, userId } = await req.json()
       console.log(startTime,userId)
        // const result = await prisma.userSession.create({
        //     data: {
        //         startTime,
        //         userId,
        //     }
        // })
        console.log("result");
        return NextResponse.json("result")
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const { endTime, userId } = await req.json()
       const user = await prisma.userSession.findFirst({where:{id:userId}})
       if(!user) return NextResponse.json("user not found")
        console.log(user);
        // const result = await prisma.userSession.update({
        //     where:{id:userId}
            
        // })
        return NextResponse.json("result")
    } catch (error) {
        return NextResponse.json(error)
    }
}