export const projects = {
  project1: {
    title: "Poly-Vinyl Pests!",
    headerImage: "/assets/pvp/pvpSplashArt.png",
    description:
      "Fight deadly bosses and your friend in this competitive multiplayer twinstick shooter",
    role: "Lead Programmer",
    teamSize: "Team of 15",
    duration: "24 Weeks",
    engine: "Unity",
    section1: {
      title: "Development Process",
      content: "Detailed explanation of the implementation.",
      image: "/project1-process.jpg",
    },
    section2: {
      title: "Features and Implementation",
      content: "Overview of the VR mechanics, puzzle systems, and performance optimizations.",
      images: ["/project1-feature1.jpg", "/project1-feature2.jpg"],
    },
  },
  project2: {
    title: "Mobile Puzzle Game",
    headerImage: "/project2-header.jpg",
    description: "A challenging mobile puzzle game that combines unique mechanics with engaging level design.",
    role: "Solo Developer",
    teamSize: "Solo Project",
    duration: "2 months",
    engine: "Unity",
    section1: {
      title: "Development Process",
      content: "Journey through the design and implementation of the core puzzle mechanics.",
      image: "/project2-process.jpg",
    },
    section2: {
      title: "Features and Implementation",
      content: "Deep dive into the level generation system and touch controls.",
      images: ["/project2-feature1.jpg", "/project2-feature2.jpg"],
    },
  },
  project3: {
    title: "3D Platformer",
    headerImage: "/project3-header.jpg",
    description: "A colorful 3D platformer featuring dynamic movement mechanics and procedural level generation.",
    role: "Technical Lead",
    teamSize: "Team of 3",
    duration: "4 months",
    engine: "Custom Engine",
    section1: {
      title: "Development Process",
      content: "Exploration of the custom physics system and character controller implementation.",
      image: "/project3-process.jpg",
    },
    section2: {
      title: "Features and Implementation",
      content: "Analysis of the procedural generation system and performance optimizations.",
      images: ["/project3-feature1.jpg", "/project3-feature2.jpg"],
    },
  },
  project4: {
    title: "Game Engine Project",
    headerImage: "/project4-header.jpg",
    description: "A custom game engine built from scratch focusing on 2D game development and editor tools.",
    role: "Engine Developer",
    teamSize: "Team of 2",
    duration: "3 months",
    engine: "Custom C++ Engine",
    section1: {
      title: "Development Process",
      content: "Overview of the engine architecture and core systems implementation.",
      image: "/project4-process.jpg",
    },
    section2: {
      title: "Features and Implementation",
      content: "Detailed look at the rendering pipeline and editor tool development.",
      images: ["/project4-feature1.jpg", "/project4-feature2.jpg"],
    },
  },
} as const

export type ProjectId = keyof typeof projects

