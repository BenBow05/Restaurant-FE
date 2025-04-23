import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Eat & Vibes - Cozy Eatery",
  description:
    "A open & relaxing environment for people to come and enjoyable.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
    {/* <html lang="en" suppressHydrationWarning> */}
      {/* <body className={inter.className}> */}
      <body className="min-h-screen bg-gradient-to-b from-pink-400 via-orange-300 to-yellow-200 dark:from-orange-500 dark:via-red-400 dark:to-purple-400">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'