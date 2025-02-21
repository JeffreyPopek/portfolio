import ProjectCard from "@/app/components/project-card"
import YouTubeEmbed from "@/app/components/youtube-embed"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin, FileDown } from "lucide-react"

const projects = [
  {
    title: "Poly-Vinyl Pests!",
    role: "Lead Programmer",
    description:
      "Attention ants of the colony, we are under attack! Monsters mutated by microplastics have invaded our realm and it's up to you and your friend to defeat them! Together you’ll defeat deadly decomposers and compete for glory as only one of you can declare yourselves the queen of the anthill.",
    teamSize: "Team of 15",
    duration: "24 Weeks",
    tech: "Unity",
    titleImage: "/assets/pvp/pvpSplashArt.png",
    hoverImage: "/assets/pvp/pvpGameplay.gif",
    slug: "pvp!",
  },
  {
    title: "Liminal Detective",
    role: "Gameplay Programmer",
    description: "The demon's heir has been murdered, and there's only one person who can solve the case... Play as Maira, a half-demon investigator trying to solve the murder of her estranged brother Joseph in this beautifully rendered, action-packed third-person mystery game.",
    teamSize: "Team of 10",
    duration: "12 Weeks",
    tech: "Unreal Engine 5",
    titleImage: "/assets/liminalDetective/liminalDetectiveSplashArt.gif",
    hoverImage: "/assets/liminalDetective/liminalDetectiveGameplay.gif",
    slug: "project2",
  },
  {
    title: "Suzume Portals",
    role: "Graphics Programmer",
    description: "A re-creation of the portal effect seen in the Makoto Shinkai film Suzume. Utilizing Unity's shader graph tool and techniques involving multiple cameras, we were able to make this effect in Unity.",
    teamSize: "Team of 2",
    duration: "1 Week",
    tech: "Unity",
    titleImage: "/assets/suzumePortals/suzumePortalsSplashArt.png",
    hoverImage: "/assets/suzumePortals/suzumePortalsDemo.gif",
    slug: "project3",
  },
  {
    title: "Holly Jolly Engine",
    role: "Programmer",
    description: "A custom game engine built using raylib. Focusing on 2D game development and level editor tools. Create objects and attach custom components to customize a level.",
    teamSize: "Team of 2",
    duration: "6 Weeks",
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
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio!</h1>
          <p className="text-xl mb-6">
          I'm currently a fourth-year student at Champlain College, working towards my Bachelor of Science degree in Game Programming. My fascination with making games started back in high school when I took my first game programming class. Even though I didn't have much technical know-how, my love for video games inspired me to learn more. This journey led me to Champlain College, where I'm chasing my dream of creating games.
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
          <Link href="mailto:jeffreypopek@gmail.com?subject=Resume%20Inquiry&body=Hello%2C%20I%20am%20interested%20in%20your%20resume.">
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
            <Link href="/assets/JeffreyPopek_Resume.pdf" target="_blank">
              <FileDown className="h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

