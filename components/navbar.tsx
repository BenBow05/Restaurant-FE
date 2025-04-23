"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen, Leaf, TreePalm, User, Sprout, } from "lucide-react"
import { useRouter } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleCapture = (imageDataUrl: string) => {
    // Store the captured image in localStorage to use it on the scan page
    localStorage.setItem("capturedImage", imageDataUrl)
    // Navigate to the scan page
    router.push("/scan")
  }

  return (
    <header className="bg-yellow-100 dark:bg-yellow-200 border-b border-yellow-300 dark:border-yellow-600 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="flex h-16 items-center justify-between"> */}
        <div className="flex h-16 items-center space-x-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <TreePalm className="h-8 w-8 text-green-800 dark:text-green-600 mr-2" />
              {/* ext-purple-400 */}
              <span className="text-2xl font-bold text-green-800 dark:text-orange-500">Eats & Vibes</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/reservation"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 font-medium"
            >
              Reservation
            </Link>
            <Link
              href="/menu"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 font-medium"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 font-medium"
            >
              About
            </Link>
          </nav>
          {/* CHANGE THIS ITS SOOOOOOOO BAD */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            {/* <Link href="/login">
              <Button
                variant="outline"
                className="border-green-600 text-green-700 hover:bg-green-50 dark:text-green-400 dark:border-green-500 dark:hover:bg-green-900"
              >
                Log in
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Sign up</Button>
            </Link> */}

          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-green-700 dark:text-green-400" />
              ) : (
                <Menu className="h-6 w-6 text-green-700 dark:text-green-400" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-green-950 border-b border-green-100 dark:border-green-800">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/recipes"
              className="flex items-center px-3 py-2 rounded-md text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5 mr-3" />
              Menu
            </Link>
            <Link
              href="/reservation"
              className="flex items-center px-3 py-2 rounded-md text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              Reservation
            </Link>
          </div>
          {/* <div className="px-4 py-3 border-t border-green-100 dark:border-green-800 space-y-2">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Sign up</Button>
            <Button
              variant="outline"
              className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:text-green-400 dark:border-green-500 dark:hover:bg-green-900"
            >
              Log in
            </Button>
          </div> */}
        </div>
      )}
    </header>
  )
}

