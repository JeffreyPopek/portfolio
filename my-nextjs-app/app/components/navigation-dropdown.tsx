"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function NavigationDropdown() {
  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="lg"
        className="font-medium flex items-center gap-1 hover:bg-transparent text-white hover:text-white/80"
      >
        Projects
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </Button>
      <div className="absolute left-0 hidden group-hover:block pt-2">
        <div className="bg-[#571661] rounded-md border border-white/20 shadow-md p-2 min-w-[8rem]">
          <Link href="/projects/pvp!" className="block px-2 py-1.5 text-sm text-white hover:text-white/80">
            Poly-Vinyl Pests!
          </Link>
          <Link href="/projects/project2" className="block px-2 py-1.5 text-sm text-white hover:text-white/80">
            Liminal Detective
          </Link>
          <Link href="/projects/project3" className="block px-2 py-1.5 text-sm text-white hover:text-white/80">
            Suzume Portals
          </Link>
          <Link href="/projects/project4" className="block px-2 py-1.5 text-sm text-white hover:text-white/80">
            Holly Jolly Engine
          </Link>
        </div>
      </div>
    </div>
  )
}

