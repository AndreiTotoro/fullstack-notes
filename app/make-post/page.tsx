'use client'

import { useState } from "react"


export default function NewPostForm() {

  const [postTitle, setPostTitle] = useState("")
  const [postContent, setPostContent] = useState("")

  async function submitPost(e: React.FormEvent) {
    e.preventDefault()
    await fetch("/api/make-post", {
      method: "POST",
      body: JSON.stringify({ title: postTitle, content: postContent })
    })
    window.location.href = "/"
   
  }

  function updatePostTitle(e: any){
    setPostTitle(e.target.value)
  }

  function updatePostContent(e: any){
    setPostContent(e.target.value)
  }

  return (
    <div className="bg-slate-600 text-slate-300 rounded-lg p-5 w-1/2 gap-3 text-center flex flex-col">
      <h1> Post title </h1>
      <input placeholder="Enter post title" onChange={updatePostTitle} value={postTitle} />
      <h1> Post content </h1>
      <input placeholder="Enter post content" onChange={updatePostContent} value={postContent} />
      <button className="bg-slate-800 p-3 rounded-md" onClick={submitPost}>Submit Post</button>
    </div>
  )
}