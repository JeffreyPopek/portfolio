"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileDown, ChevronDown } from "lucide-react"

export function NavigationMenu() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        window.scrollTo(0, 0)
      }
      handleRouteChange()
    }
  }, [])

  return (
    <div className="container flex h-16 items-center justify-between">
      <div className="text-left">
        <h1 className="text-2xl font-bold tracking-tight">Jeffrey Popek</h1>
        <p className="text-lg text-muted-foreground">Game Programmer</p>
      </div>
      <nav className="flex items-center space-x-8">
        <Link href="/" className="font-medium transition-colors hover:text-primary">
          Home
        </Link>
        <div className="relative group">
          <Button variant="ghost" size="lg" className="font-medium flex items-center gap-1 hover:bg-transparent">
            Projects
            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
          </Button>
          <div className="absolute left-0 hidden group-hover:block pt-2">
            <div className="bg-popover rounded-md border shadow-md p-2 min-w-[8rem]">
              <Link href="/projects/pvp!" className="block px-2 py-1.5 text-sm hover:text-primary">
                Project 1
              </Link>
              <Link href="/projects/project2" className="block px-2 py-1.5 text-sm hover:text-primary">
                Project 2
              </Link>
            </div>
          </div>
        </div>
        <Link href="/about" className="font-medium transition-colors hover:text-primary">
          About
        </Link>
        <Button asChild variant="ghost" size="lg">
          <Link href="/assets/JeffreyPopek_Resume.pdf" target = "_blank" className="flex items-center gap-2">
            <FileDown className="h-5 w-5" />
            Resume
          </Link>
        </Button>
      </nav>
    </div>
  )
}

