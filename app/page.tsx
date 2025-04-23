import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Sprout, BookOpen, Heart, TreePalm, Palmtree } from "lucide-react"

export default function Home() {
  return (
    // <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-500 via-red-400 to-purple-400">
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative dark:to-green-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
            <TreePalm className="h-96 w-96 text-green-300 dark:text-green-700 opacity-40" />
          </div>
          <div className="absolute right-0 bottom-0">
            <Heart className="h-64 w-64 text-green-300 dark:text-green-700 opacity-40" />
          </div>
          <div className="absolute left-0 bottom-1/4">
            <Heart className="h-48 w-48 text-green-300 dark:text-green-700 opacity-40" />
          </div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-300 mb-6">
                Eat, Drink, Enjoy
                {/* Could use some work */}
              </h1>
              <p className="text-xl md:text-2xl text-green-700 dark:text-green-400 mb-8">
                (Tag Line)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser/images??? */}

      {/* Menu/popular items/specials??? */}
      {/* Reservation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Make a reservation today!</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
            Reserve
          </Button>
        </div>
      </section>
      {/* Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">Events & Vibes</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
            Sign-up Here
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-pink-400 via-orange-300 to-yellow-200 dark:from-orange-500 dark:via-red-400 dark:to-purple-400 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Palmtree className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Eats & Vibes</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="#" className="text-white hover:text-blue-400">
                About
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                Reservation
              </Link>
              <Link href="/menu" className="text-green-200 hover:text-white">
                Menu
              </Link>
              <Link href="#" className="text-green-200 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>© {new Date().getFullYear()} Eat & Vibes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

