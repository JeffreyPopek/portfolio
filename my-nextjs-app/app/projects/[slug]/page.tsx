"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, User, Clock, Wrench } from "lucide-react"
import { projects } from "../project-data"
import type { ProjectId } from "../project-data"
import { use } from "react" // Import use

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Unwrap the params with React.use()
  const { slug } = use(params)

  const project = projects[slug as ProjectId]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <div className="relative aspect-video mb-6">
          <Image
            src={project.headerImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
      </div>

      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative">
          <h2 className="text-2xl font-semibold text-center mb-4">About</h2>
          <p className="text-center">{project.description}</p>
        </div>
      </div>

      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative flex flex-col items-center space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5" />
            <span>Role: {project.role}</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5" />
            <span>Team Size: {project.teamSize}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <span>Duration: {project.duration}</span>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="h-5 w-5" />
            <span>Engine: {project.engine}</span>
          </div>
        </div>
      </div>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">{project.section1.title}</h2>
        <p className="mb-6">{project.section1.content}</p>
        <div className="relative aspect-video">
          <Image
            src={project.section1.image || "/placeholder.svg"}
            alt={project.section1.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">{project.section2.title}</h2>
        <p className="mb-6">{project.section2.content}</p>
        <div className="grid grid-cols-2 gap-4">
          {project.section2.images.map((image, index) => (
            <div key={index} className="relative aspect-video">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Feature ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              Temp Button 1
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              Temp Button 2
            </Link>
          </Button>
        </div>
      </section>
    </article>
  )
}