import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "Tiny Workout",
    projectUrls: {
      repo: {
        owner: "MrStashy",
        name: "tiny-workout-client",
        showStarCount: false,
      },
      site: {
        url: "https://tiny-workout.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      }
    },
    imageUrl: "/images/tiny-workout-screen.png",
    description: `A fullstack app for tracking workouts and exploring deep statistical analysis of performance over time. Both visually with charts, but also with data insights-all coded by me, using recognised scientific analysis. Log in with "test@email.com" and "TestPassword1!" to explore.`,
    tech: [
      "JavaScript",
      "React",
      "TailwindCSS",
      "Node",
      "Express",
      "REST API",
      "Postgres",
      "Prisma",
      "Vercel",
      "Railway"
    ],
    cards: {
      a: {
        title: "Minimised Dependencies",
        text: `A self-imposed challenge to develop deeper understanding by avoiding dependencies, libraries, and frameworks. Where I would have used shadcn, Clerk, and other libraries or frameworks, I programmed everything myself. Including the bearer auth system.`,
      },
      b: {
        title: "Converting To TypeScript",
        text: `This project is being converted to TypeScript. The app is at the point where lacking strict typing is costing more time than it would take to type everything.`,
      },
    },
  },
  {
    title: "Competitive Solitaire",
    projectUrls: {
      repo: {
        owner: "MrStashy",
        name: "competitive-solitaire",
        showStarCount: false,
      },
    },
    imageUrl: "/images/under-construction.webp",
    description: `A full-stack competitive game with leaderboards where users try to beat a traditional game of solitaire and post their time to compare performance against friends and other users. This project provides an exploration of drag and drop UX and animation using GSAP.`,
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "REST API",
      "Express",
      "Node",
      "Postgres",
      "dnd kit",
      "GSAP"
    ],
    cards: {
      a: {
        title: "Drag and Drop",
        text: `Ostensibly not the trickiest UX feature to implement, but when draggable elements can consist of more than one React component depending on their siblings (think descending black-red cards for solitaire), it can become tricky to handle programmatically.`,
      },
      b: {
        title: "Animation",
        text: `Instead of cards simply appearing in place, the goal is to animate them and add sound. Little touches like cards that wobble as they're dragged, the sound of cards sliding over other cards, and other pieces of visual and audio feedback create an engaging and satisfying gameplay experince for users.`,
      },
    },
  },
  {
    title: "Sudoku Solver",
    projectUrls: {
      repo: {
        owner: "MrStashy",
        name: "sudoku-solver",
        showStarCount: false,
      },
      site: {
        url: "https://mrstashy.github.io/sudoku-solver/",
        icon: <RiExternalLinkLine size={20} />,
      }
    },
    imageUrl: "/images/sudoku-screen.png",
    description: `A frontend app for solving sudoku puzzles.`,
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Algorithms"
    ],
    cards: {
      a: {
        title: "Agorithms",
        text: `This was a test of algorithmic programming. Using the backtracking algorithm as an entry point. More complex, faster algorithms exist and I will test them over time.`,
      },
      b: {
        title: "Deeper Maths",
        text: `There are straightforward methods for deciding if a cell only has a single valid number (e.g. is there already another cell with this number in this row/quadrant/column?). But beyond that there are countless other strategies to determine valid numbers, these ideas have not only improved my sudoku skills, they've made me a better programmer.`,
      },
    },
  }
  
];
