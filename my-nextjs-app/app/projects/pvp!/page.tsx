"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, User, Clock, Wrench } from "lucide-react"

export default function VRProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <div className="relative aspect-video mb-6">
          <Image src="/project1-header.jpg" alt="VR Escape Room" fill className="object-cover rounded-lg" />
        </div>
        <h1 className="text-4xl font-bold">VR Escape Room</h1>
      </div>

      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative">
          <h2 className="text-2xl font-semibold text-center mb-4">About</h2>
          <p className="text-center">
            An immersive VR escape room experience that challenges players to solve puzzles using virtual reality
            interactions.
          </p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative flex flex-col items-center space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5" />
            <span>Role: Lead Programmer</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5" />
            <span>Team Size: Team of 4</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <span>Duration: 3 months</span>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="h-5 w-5" />
            <span>Engine: Unreal Engine 5</span>
          </div>
        </div>
      </div>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Development Process</h2>
        <p className="mb-6">Detailed explanation of the VR implementation, puzzle design, and interaction systems.</p>
        <div className="relative aspect-video">
          <Image src="/project1-process.jpg" alt="Development Process" fill className="object-cover rounded-lg" />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Features and Implementation</h2>
        <p className="mb-6">Overview of the VR mechanics, puzzle systems, and performance optimizations.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-video">
            <Image src="/project1-feature1.jpg" alt="Feature 1" fill className="object-cover rounded-lg" />
          </div>
          <div className="relative aspect-video">
            <Image src="/project1-feature2.jpg" alt="Feature 2" fill className="object-cover rounded-lg" />
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="https://github.com/your-username/vr-escape-room" target="_blank" rel="noopener noreferrer">
              View Source Code
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer">
              Watch Demo
            </Link>
          </Button>
        </div>
      </section>
    </article>
  )
}

