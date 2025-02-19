import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, User, Clock, Wrench } from "lucide-react"

// This would typically come from a database or API
const projects = {
  project1: {
    title: "Project 1",
    headerImage: "/project1-header.jpg",
    description: "A brief description of the project that explains the core concept and main features.",
    role: "Lead Programmer",
    teamSize: "Team of 4",
    duration: "3 months",
    engine: "Unreal Engine 5",
    section1: {
      title: "Development Process",
      content: "Detailed explanation of the development process, challenges faced, and solutions implemented.",
      image: "/project1-process.jpg",
    },
    section2: {
      title: "Features and Implementation",
      content: "Description of key features and technical implementation details.",
      images: ["/project1-feature1.jpg", "/project1-feature2.jpg"],
    },
  },
  project2: {
    title: "Project 2",
    description: "Detailed description of Project 2",
    image: "/placeholder.svg",
    details: "More in-depth information about Project 2...",
  },
  project3: {
    title: "Project 3",
    description: "Detailed description of Project 3",
    image: "/placeholder.svg",
    details: "More in-depth information about Project 3...",
  },
  project4: {
    title: "Project 4",
    description: "Detailed description of Project 4",
    image: "/placeholder.svg",
    details: "More in-depth information about Project 4...",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      {/* Header Image and Title */}
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

      {/* About Section */}
      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative">
          <h2 className="text-2xl font-semibold text-center mb-4">About</h2>
          <p className="text-center">{project.description}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="relative p-6 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
        <div className="relative space-y-4">
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

      {/* Development Process Section */}
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

      {/* Features Section */}
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

