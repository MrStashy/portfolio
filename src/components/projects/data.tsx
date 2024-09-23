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
    title: "Sudoku Solver (Under Construction)",
    projectUrls: {
      repo: {
        owner: "MrStashy",
        name: "sudoku-solver",
        showStarCount: false,
      }
    },
    imageUrl: "/images/under-construction.webp",
    description: `A frontend app for solving and generating sudoku puzzles.`,
    tech: [
      "TypeScript",
      "React",
      "TailwindCSS"
    ],
    cards: {
      a: {
        title: "Object Oriented",
        text: `Engineered to utilize object oriented paradigms and offer opportunities to explore the tenets of object oriented programming.`,
      },
      b: {
        title: "Deeper Maths",
        text: `There are straightforward methods for deciding if a cell only has a single valid number (e.g. is there already another cell with this number in this row/quadrant/column?). But beyond that there are countless other strategies to determine valid numbers, these ideas have not only improved my sudoku skills, they've made me a better programmer.`,
      },
    },
  }
  
];
