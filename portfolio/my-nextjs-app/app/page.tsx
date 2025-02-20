import ProjectCard from "@/app/components/project-card"
import YouTubeEmbed from "@/app/components/youtube-embed"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin, FileDown } from "lucide-react"

const projects = [
  {
    title: "VR Escape Room",
    description:
      "An immersive VR escape room experience that challenges players to solve puzzles using virtual reality interactions.",
    teamSize: "Team of 4",
    duration: "3 months",
    tech: "Unreal Engine 5",
    titleImage: "/assets/image.jpg",
    hoverImage: "/assets/fruit.gif",
    slug: "project1",
  },
  {
    title: "Mobile Puzzle Game",
    description: "A challenging mobile puzzle game that combines unique mechanics with engaging level design.",
    teamSize: "Solo Project",
    duration: "2 months",
    tech: "Unity",
    titleImage: "/assets/image.jpg",
    hoverImage: "/assets/image.jpg",
    slug: "project2",
  },
  {
    title: "3D Platformer",
    description: "A colorful 3D platformer featuring dynamic movement mechanics and procedural level generation.",
    teamSize: "Team of 3",
    duration: "4 months",
    tech: "Custom Engine",
    titleImage: "/assets/image.jpg",
    hoverImage: "/assets/image.jpg",
    slug: "project3",
  },
  {
    title: "Game Engine Project",
    description: "A custom game engine built from scratch focusing on 2D game development and editor tools.",
    teamSize: "Team of 2",
    duration: "3 months",
    tech: "Custom C++ Engine",
    titleImage: "/assets/image.jpg",
    hoverImage: "/assets/image.jpg",
    slug: "project4",
  },
]

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
        <YouTubeEmbed videoId="5l8VZEyNRH8" />
        </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
            <Link href="https://www.linkedin.com/in/jeffreypopek/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="/assets/image.jpg" download>
              <FileDown className="h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

