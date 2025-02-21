"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, User, Clock, Wrench } from "lucide-react"

export default function VRProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  module.exports = {
    theme: {
      extend: {
        fontSize: {
          'custom': '60px', // Define a custom font size
        },
      },
    },
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <div className="relative aspect-video mb-6">
          <Image src="/assets/pvp/pvpSplashArt.png" alt="VR Escape Room" fill className="object-cover rounded-lg" />
        </div>
        <h1 className="text-4xl font-bold">Poly-Vinyl Pests!</h1>
      </div>

      <div className="relative p-6 rounded-lg overflow-hidden">
  <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
  <div className="relative">
    <h2 className="text-2xl font-semibold text-center mb-4">About</h2>
    <p className="text-center text-lg">
      Attention ants of the colony, we are under attack! Monsters mutated by microplastics have invaded our realm and it's up to you and your friend to defeat them! Poly-Vinyl Pests, or PVP for short, is an arcade action style game where you and your friend take the roles of the champions from competing ant colonies. Together you’ll defeat deadly decomposers and compete for glory as only one of you can declare yourselves the queen of the anthill.
    </p>
  </div>

  <div className="relative aspect-video mt-6">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/TUbv2xJPxQ0?si=DLh8s90lsOJdAFF9"
      title="YouTube video player"

      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
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
            <span>Team Size: Team of 15</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <span>Duration: 24 Weeks</span>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="h-5 w-5" />
            <span>Engine: Unity</span>
          </div>
        </div>
      </div>


      <div className="py-10"> {/* This ensures space is added */}
  <section className="text-center text-xl">
    <h2 className="text-2xl font-semibold mb-4">My Role</h2>
    <p className="mb-6 ">
      In this project I was tasked with the creation of many systems for our game to function. I mainly focused on the AI and UI of the game while still working in many other areas. I created our two unique boss fights and all the game’s UI in collaboration with our dedicated boss and UI designers respectively. Besides my main focus, I maintained the codebase for our local multiplayer, narrative, and player systems.
    </p>
    <p className="mb-0">
      My main goal of this project was to get a minimum viable product working for the end of the semester, but also help create a polished product. This project, if our team got through greenlight, would get another semester of development in the spring semester, so showing a core game loop with a lot of polish was the main priority.
    </p>
  </section>
  </div>

  { /* Space between sections */ }

  <div className="py-10"> {/* This ensures space is added */}
  <section className="text-center mt-10 text-xl"> 
    <h2 className="text-2xl font-semibold mb-4">About the Game</h2>
    <p className="mb-6">
      In Poly-Vinyl Pests you and one of your friends take the role as champions of warring ant colonies. You and your friend are tasked with defeating different boss monsters that have fused with various pieces of trash and now use it to their benefit. These monsters are known as decomposers and have the unique ability to break down the plastics that we humans littered throughout the earth. To fight these monsters you must put aside your differences and work together to defeat the bosses, but after the fight is over you will begin pvp combat with your former ally. At the end of the game the winner is determined by the amount of score each player has. Players can gain score by hitting bosses and the other player.
    </p>
    <div className="w-full flex justify-center mb-6"> 
  <Image 
    src="/assets/pvp/pvpGameLoopDiagram.png" 
    alt="VR Escape Room" 
    width={800}  // Adjust width as needed
    height={600} // Adjust height as needed
    className="rounded-lg"
  />
</div>
  </section>
  </div>

  { /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Bullet Hell</h2>
  <p className="mb-6">
  Poly-Vinyl Pests takes heavy inspiration from bullet hell games, so a robust bullet hell system was mandatory. I collaborated with one of our designers to design and implement a bullet hell system that all current and future bosses could use. The bullet hell system uses an object pool to store all gameobjects for efficiency and will spawn them with custom rotation and direction based on the pattern. Using this system our team was able to easily implement new attack patterns in a short amount of time.
  </p>

  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpGameplay.gif" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>
</section>
</div>



{ /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Boss AI</h2>
  <p className="mb-6">
  When we were in the early stages of development I needed to quickly create a boss AI that was able to switch between two targets. I wanted to create the boss systems to be accessible to all disciples that would need to work with it so I decided to utilize Unity’s animator as the state machine for the boss. After a lot of experimentation I was able to get the state machine working with easily accessible values to change things about the boss. Another benefit of using the unity animator was that our team’s animator could easily add animations into the boss without having to ask someone else to do it and bottleneck our art pipeline.
  </p>

  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpLSanimator.PNG" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>

<p className="mb-6">
There was definitely some getting used to working with the animator, but after a few weeks of development the entire team was glad to be able to utilize a feature that was built into the engine and have very accessible systems. The way the boss AI is implemented would allow designers and artists with less programming knowledge to easily work with the AI.
  </p>

  <p className="mb-6">
  The way the Ai works is in a state that determines which attack it will perform based on the game state, then moves to that state. After the attack is done it will move back to the atack decider state and repeat this loop until the boss is dead. This simple implementation allows for a rapid iteration which was necessary due to the amount of balancing and testing we had to do for each boss fight.
  </p>

  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpAnimatorWorking.gif" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>
</section>
</div>


{ /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Bosses</h2>
  <p className="mb-6">
  We were able to implement two unique and fun bosses into our game for this semester. The first one is the laundry snail, a slug that made a laundry detergent bottle its shell and shoots poisonous laundry detergent and (non-branded) tide pods at the players.
  </p>

  <div className="relative aspect-video mt-6">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/I4PmqUP8gng?si=0z8BXeq5j2UuVHyF"
      title="YouTube video player"

      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>


  <div className="relative aspect-video mt-6 mb-12 text-xl">
  <p className="mb-10">
  Our second boss is the bottle mushrooms, a hivemind of mushrooms that took residence in plastic water bottles that shoot spores at the players. Alone each mushroom isn’t very strong, but when they all work together it can be very challenge to avoid all of their attacks.
  </p>

  <div className="relative aspect-video mt-6">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/F6QIURMGgGY?si=TtANRZmCVvS84W76"
      title="YouTube video player"

      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  </div>

</section>
</div>




{ /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Boss Challenges</h2>
  <p className="mb-6">
  When designing our first boss we had a lot of time left in the semester to work, but when we wanted to add a second one that was when we had to start really thinking about how much time we had left. The way we designed the second boss made use of existing systems to create a unique boss fight without the creation of new massive systems to save time and energy. We made sure to reuse the bullet hell system and designed the second boss to require little to no animations but still feel alive. Our final product was the bottle mushrooms, a hivemind boss that would spawn mushroom enemies that did not move around the arena. This design took care of most of the risks involving implementing a second boss in such a short amount of time.
  </p>
</section>
</div>


{ /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Score System</h2>
  <p className="mb-6">
  To determine which player is the Poly-Vinyl Best at the end of the game we needed to keep some kind of score. Our team decided on an arcade style of score which would increase whenever a player hit a boss or another player. Players cannot shoot their “teammate” during boss fights, but can during the pvp sections of the game. The score is always displayed on the screen and a final score will be shown at the end of the game. Players will also lose score when they die during a boss fight. If you win a pvp combat round then you will be awarded with a large amount of points. We did this to prevent one player that got ahead in the PvE round running away with the game.
  </p>
  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpScoreboard.PNG" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>
</section>
</div>


{ /* Space between sections */ }

<div className="py-10"> {/* This ensures space is added */}
<section className="text-center mt-10 text-xl"> 
  <h2 className="text-2xl font-semibold mb-4">Pvp</h2>
  <p className="mb-6">
  The other part of Poly-Vinyl Pests is the pvp combat. To make this combat feel more interesting, our team designed and implemented two different arenas with separate environmental mechanics to make combat more dynamic. I implemented both of these arenas with the help of our designers and artists to make sure we stayed on theme.
  </p>

  <p className="mb-6">
  The first arena was the pvp combat after the laundry snail. To help us make the art scope smaller we used the same environmental assets as the laundry snail’s arena with a few new props added in for the arena’s mechanic. The mechanic of this stage is the sludge that spawns in the four corners and will slowly encroach until the arena is almost completely covered. Walking into this sludge will deal damage to the players and forces the players to get closer to each other. Another mechanic is the red solo cups that players can dash through.
  </p>
  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpDrainGangFight.gif" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>

<p className="mb-6">
The second arena is after the bottle mushroom fight. Using the same tactic in reusing the boss’s arena assets, we were able to quickly create an arena for the players to fight in. The mechanic of this arena is the destructible trash bags that are scattered throughout the arena. The players can shoot them to destroy them after a varying amount of damage.
  </p>

  <div className="w-full flex justify-center mb-6"> 
<Image 
  src="/assets/pvp/pvpgarbageGrotto.gif" 
  alt="VR Escape Room" 
  width={800}  // Adjust width as needed
  height={600} // Adjust height as needed
  className="rounded-lg"
/>
</div>
</section>
</div>



    </article>
  )
}

