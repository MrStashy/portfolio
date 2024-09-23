import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "",
  glowText: "nextMotion",
  subTitle: "A sleek UI starter for an unforgettable portfolio",
  highlight: ["unforgettable"],
};

export const profileCard = {
  title: "Will Baxter",
  subTitle: "Fullstack Software Developer",
  body: `Passionate coder transitioning from marketing to web development. I combine UX and user-journey understanding with engineering skills to create effortless software experiences.`,
  socialUrls: [
    {
      url: "https://www.linkedin.com/in/will-baxter-5ba630103/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "https://github.com/MrStashy",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://willbaxter.my.canva.site/images/db61fc1e47dfd43237a9c0b704450ae4.jpg",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
