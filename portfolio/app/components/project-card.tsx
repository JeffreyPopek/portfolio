"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Clock, Wrench, ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    teamSize: string
    duration: string
    tech: string
    titleImage: string
    hoverImage: string
    slug: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-border"
    >
      <div className="relative aspect-video">
        <Image
          src={project.titleImage || "/placeholder.svg"}
          alt={`${project.title} Title`}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={project.hoverImage || "/placeholder.svg"}
          alt={`${project.title} Preview`}
          fill
          className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 flex gap-4 text-white">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{project.teamSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4" />
            <span>{project.tech}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground">Gameplay Programmer</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <p className="text-muted-foreground mt-2">{project.description}</p>
      </div>
    </Link>
  )
}

