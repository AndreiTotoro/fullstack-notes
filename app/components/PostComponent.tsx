import React from 'react'
import Post from '../interfaces/app_interfaces'
import Link from 'next/link'

export default function PostComponent({ postData }: {postData: Post}) {
  return (
    <div className="bg-slate-600 rounded-xl w-30 p-4 text-slate-300">
            <h1 className="font-bold">{postData.title}</h1>
            <p>{postData.content}</p>
            <p>Id: {postData.id}</p>
            <Link href={`./view-post/${postData.id}`}>
            <button className="bg-blue-600 text-blue-300 rounded-lg p-2">View Post</button>
            </Link>
    </div>
  )
}
