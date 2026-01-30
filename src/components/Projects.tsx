import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/constants";
import { ArrowRight, Github } from "lucide-react";

export const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="projects"
    >
      <SectionHeader title="Projects" subtitle="My works" />

      <motion.div
        className="grid md:grid-cols-2 gap-8 mt-10"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            descTitle={project.descTitle}
            desc={project.desc}
            tags={project.tags}
            title={project.title}
          />
        ))}

        <motion.div
          variants={fadeUp}
          className="mt-6 md:col-span-2 flex justify-center items-center"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 hover:border-2 hover:text-neutral-200 transition-colors"
            onClick={() => (window.location.href = "https://github.com/ixiac")}
          >
            <span className="flex items-center gap-2">
              View more on <Github className="inline w-5 h-5 ml-2" />
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
