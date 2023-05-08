import { prisma } from "@/prisma/client"
import Link from "next/link"
import Post from "./interfaces/app_interfaces"
import PostComponent from "./components/PostComponent"

async function getPosts(){
    const data = await fetch("http://localhost:3000/api/get-posts", { cache: 'no-store' })
    return data.json()
}

export default async function Page() {
  const posts = await getPosts()
  console.log(posts)
  return (
    <div>
      <h1 className="text-slate-600">Hello, NextJS, Typescript and Prisma!</h1>
      <div className="grid grid-cols-4 gap-4 py-4">
        {posts.map(post => (
          <PostComponent postData={post} key={post.id} />
      ))}
      </div>
    </div>
  )
} 