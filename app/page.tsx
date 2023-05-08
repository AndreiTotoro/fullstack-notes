import Post from "./interfaces/app_interfaces"
import PostComponent from "./components/PostComponent"
import { prisma } from "@/prisma/client"

export const revalidate = 0

async function getPosts(): Promise<Post[]>{
    const data = await prisma.post.findMany()
    return data
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