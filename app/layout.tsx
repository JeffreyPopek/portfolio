import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavigationDropdown from "./components/navigation-dropdown"
import { FileDown } from "lucide-react"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#571661] text-white">
          <div className="container flex h-16 items-center justify-between">
            <div className="text-left">
              <h1 className="text-2xl font-bold tracking-tight text-white">Jeffrey Popek</h1>
              <p className="text-lg text-white/80">Game Programmer</p>
            </div>
            <nav className="flex items-center space-x-8">
              <Link href="/" className="font-medium text-white hover:text-white/80 transition-colors">
                Home
              </Link>
              <NavigationDropdown />
              <Link href="/about" className="font-medium text-white hover:text-white/80 transition-colors">
                About
              </Link>
              <Button asChild variant="ghost" size="lg" className="text-white hover:text-white/80">
                <Link href="/path-to-your-resume.pdf" download className="flex items-center gap-2">
                  <FileDown className="h-5 w-5" />
                  Resume
                </Link>
              </Button>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-8 px-4">{children}</main>
        <footer className="border-t border-white/10 mt-12 py-6 text-center">
          <p>© {new Date().getFullYear()} Jeffrey Popek. All rights reserved.</p>
          <p>Contact: jeffreypopek@gmail.com</p>
        </footer>
      </body>
    </html>
  )
}

