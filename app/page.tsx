import Link from "next/link"
import Image from "next/image"
import { Users, Clock, Wrench, ArrowRight, Mail, Linkedin, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative text-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-6">
            I'm a 4th year game programming student passionate about creating immersive gaming experiences. Currently
            seeking internships and job opportunities in the game development industry.
          </p>
        </div>
        <div className="relative mt-12 aspect-video max-w-5xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id"
            title="Portfolio Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Project 1",
              description: "A brief description of the project and its key features.",
              teamSize: "Team of 4",
              duration: "3 months",
              tech: "Unreal Engine 5",
              titleImage: "/project1-title.jpg",
              hoverImage: "/project1-hover.gif",
              slug: "project1",
            },
            {
              title: "Project 2",
              description: "Another exciting project with unique challenges and solutions.",
              teamSize: "Solo Project",
              duration: "2 months",
              tech: "Unity",
              image: "/placeholder.svg",
              slug: "project2",
              titleImage: "/project2-title.jpg",
              hoverImage: "/project2-hover.gif",
            },
            {
              title: "Project 3",
              description: "An innovative approach to game development and design.",
              teamSize: "Team of 3",
              duration: "4 months",
              tech: "Custom Engine",
              image: "/placeholder.svg",
              slug: "project3",
              titleImage: "/project3-title.jpg",
              hoverImage: "/project3-hover.gif",
            },
            {
              title: "Project 4",
              description: "Pushing the boundaries of interactive entertainment.",
              teamSize: "Team of 2",
              duration: "3 months",
              tech: "Godot",
              image: "/placeholder.svg",
              slug: "project4",
              titleImage: "/project4-title.jpg",
              hoverImage: "/project4-hover.gif",
            },
          ].map((project) => (
            <Link
              key={project.slug}
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
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <div className="flex justify-center items-center gap-8">
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="mailto:jeffreypopek@gmail.com">
              <Mail className="h-5 w-5" />
              jeffreypopek@gmail.com
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="/path-to-your-resume.pdf" download>
              <FileDown className="h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

