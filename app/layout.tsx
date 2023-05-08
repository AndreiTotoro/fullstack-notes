import { ReactNode } from "react";
import "./globals.css"
import Navbar from "./components/Navbar";



export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
          <body className="bg-slate-300" >
            <Navbar />
            {children}</body>
        </html>
    )
}