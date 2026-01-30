import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { SparkleIcon } from "lucide-react";

export const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className="pt-20 mb-60"
      id="hero"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 w-42"
      >
        <SparkleIcon size={15} className="font-medium text-white" />
        <span className="font-semibold text-white">Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-neutral-200 text-4xl md:text-4xl lg:text-6xl font-medium capitalize mt-4 max-w-3xl md:leading-16"
      >
        I'm{" "}
        <span className="text-emerald-500 font-semibold">
          Bien Marlon Maranan
        </span>
        , a Full-Stack Web Developer & Data Analyst.
      </motion.h1>
      <motion.p variants={fadeUp} className="text-neutral-300 mt-8 max-w-2xl">
        I build responsive, user-friendly full-stack web applications
        and analyze data to improve system performance and user experience. I
        focus on building reliable solutions while continuously improving my
        skills and adapting to new technologies.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-6 max-w-2xl">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="bg-neutral-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 hover:border-2 hover:text-neutral-200 transition-colors"
        >
          Download CV
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
