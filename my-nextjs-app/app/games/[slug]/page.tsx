import { notFound } from "next/navigation"
import Image from "next/image"

// This would typically come from a database or API
const games = {
  game1: {
    title: "Game 1",
    description: "Detailed description of Game 1",
    image: "/placeholder.svg",
    details: "More in-depth information about Game 1...",
  },
  game2: {
    title: "Game 2",
    description: "Detailed description of Game 2",
    image: "/placeholder.svg",
    details: "More in-depth information about Game 2...",
  },
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = games[params.slug as keyof typeof games]

  if (!game) {
    notFound()
  }

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-bold">{game.title}</h1>
      <Image src={game.image || "/placeholder.svg"} alt={game.title} width={800} height={400} className="rounded-lg" />
      <p className="text-xl">{game.description}</p>
      <div className="prose max-w-none">
        <p>{game.details}</p>
        {/* Add more sections as needed */}
      </div>
    </article>
  )
}

