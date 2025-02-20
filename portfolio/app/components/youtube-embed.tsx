"use client"

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div className="relative mt-12 aspect-video max-w-5xl mx-auto">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Portfolio Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  )
}

