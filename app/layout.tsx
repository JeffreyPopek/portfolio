import type React from "react"
import { NavigationMenu } from "./components/navigation-menu"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <NavigationMenu />
        </header>
        <main className="container mx-auto mt-8 px-4">{children}</main>
        <footer className="border-t mt-12 py-6 text-center">
          <p>© {new Date().getFullYear()} Jeffrey Popek. All rights reserved.</p>
          <p>Contact: your.email@example.com</p>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
