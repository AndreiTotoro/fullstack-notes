import { prisma } from "@/prisma/client";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET() {
    const posts: any = await prisma.post.findMany()
    console.log(posts)
    return NextResponse.json(posts)
}