import Post from "@/app/interfaces/app_interfaces";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation';


export async function POST(req: Request){

  const postData: any = await req.json()
  console.log(postData)
  const res = await prisma.post.create({
    data: {
      title:  postData.title,
      content: postData.content,
    }
  })

}