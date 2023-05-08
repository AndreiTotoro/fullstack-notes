import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex bg-slate-600 text-slate-300 justify-between py-4 mb-6">
    <h1>Blogu lu Manuc</h1>
    <div className="flex gap-4">
      <Link href={"./"}>Home</Link>
      <Link href={"./make-post"}>Make Post</Link>
    </div>
  </div>)
}
