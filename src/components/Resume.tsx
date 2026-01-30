import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience, tools } from "@/constants";
import { ExpCard } from "@/components/ExpCard";
import { ToolsCarousel } from "@/components/ToolsCarousel";

export const Resume = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10"
      id="resume"
    >
      <SectionHeader
        title="Resume"
        subtitle="Professional background and experience"
      />

      <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
        My Education, Experience, and Tech Stack at a Glance
      </motion.p>

      <div className="grid gap-x-10 my-16 md:grid-cols-2">
        <motion.div variants={fadeUp} className="mb-16 md:md-0">
          <h2 className="text-3xl font-bold text-emerald-600 mb-8 capitalize">
            Education
          </h2>
          <div className="space-y-8 border-l border-neutral-700 pl-6">
            {" "}
            {education.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold text-emerald-600 mb-8">
            Experience
          </h2>
          <div className="space-y-8 border-l border-border pl-6">
            {" "}
            {experience.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="my-16">
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-emerald-600 mb-8 capitalize"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.5)}
        >
          <ToolsCarousel tools={tools} />
        </motion.div>
      </div>
    </motion.section>
  );
};
