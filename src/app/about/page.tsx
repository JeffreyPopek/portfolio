
import { Github, Linkedin, FileDown } from "lucide-react"
import Link from "next/link"
import {Button} from "../../components/ui/button";

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">About Me</h1>

      <div className="prose max-w-none">
        <p className="text-xl">
          I'm a passionate game programmer in my 4th year of study. I specialize in [your specialties] and have
          experience with [relevant technologies and tools].
        </p>
        <p>
          Throughout my academic journey, I've developed a strong foundation in [key skills], and I'm always eager to
          learn and apply new technologies in game development.
        </p>
        <p>
          I'm currently seeking internship and job opportunities where I can contribute my skills and grow as a game
          developer.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <Button asChild size="lg" className="gap-2">
          <Link href="/path-to-your-resume.pdf" download>
            <FileDown className="h-5 w-5" />
            Download Resume
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </Link>
        </Button>
      </div>

      {/* Add more sections as needed */}
    </div>
  )
}

