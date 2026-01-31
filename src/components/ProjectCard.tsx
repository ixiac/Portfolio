import { motion } from "motion/react";
import { fadeUp } from "@/constants/animations";
import type { ProjectType } from "@/types";
import { useState } from "react";

export const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  descTitle,
  desc,
  title,
}: {
  imgSrc: ProjectType["imgSrc"];
  projectLink: ProjectType["projectLink"];
  tags: ProjectType["tags"];
  descTitle: ProjectType["descTitle"];
  desc: ProjectType["desc"];
  title: ProjectType["title"];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={fadeUp} 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-md group"
      >
        <figure className="relative border-2 border-neutral-400 dark:border-neutral-300 rounded-md overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="rounded-md transition duration-500 group-hover:scale-110 w-full h-90 object-cover"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: isHovered ? "10%" : "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 bottom-0 h-[60%] bg-neutral-800/90 backdrop-blur-sm rounded-md flex flex-col justify-start p-6"
          >
            <h3 className="text-emerald-600 font-semibold text-xl mb-2">
              {descTitle}
            </h3>
            <p className="text-gray-200 text-sm line-clamp-3">{desc}</p>
          </motion.div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? "-20%" : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 p-2 flex gap-2 z-20"
          >
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-emerald-600 hover:bg-neutral-600 hover:text-white py-1 px-2 rounded-sm text-sm transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </figure>
      </a>
    </motion.div>
  );
};