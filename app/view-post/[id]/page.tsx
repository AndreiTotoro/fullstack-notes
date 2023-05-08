import Post from '@/app/interfaces/app_interfaces'
import {prisma} from '@/prisma/client'
import Link from 'next/link'
import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!post){
    return <div>Post not found</div>
  }
  else{
    return (
    <div>
      <h1>Title: {post.title}</h1>
      <h1>Content: {post.content}</h1>
      <h1>Id: {post.id}</h1>
      <Link href={"./"}>
        <button className='bg-blue-600 text-blue-300 rounded-lg p-2'>Go Back</button>
      </Link>
    </div>
  )
  }
  
}
