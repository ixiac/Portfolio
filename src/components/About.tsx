import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { SectionHeader } from "@/components/contents/SectionHeader";
import { ArrowRight } from "lucide-react";
import { GlowEffect } from "@/components/ui/glow-effect";

export const About = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
      variants={staggerContainer(0)}
      className="mt-30 scroll-mt-10 mb-20"
      id="about"
    >
      <SectionHeader title="About Me" subtitle="My background and skills" />
      <motion.p
        variants={fadeUp}
        className="mt-4 dark:text-neutral-300 max-w-5xl"
      >
        I am an IT graduate from Batangas State University, specializing in
        Business Analytics. As a full-stack developer, I create web, mobile, and
        system applications, blending front-end design with back-end
        functionality.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-4 dark:text-neutral-300 max-w-5xl"
      >
        I have hands-on experience developing full-stack projects, maintaining
        databases using MySQL, Firebase, and PostgreSQL, and applying data
        analytics to optimize system performance. I thrive in collaborative
        environments and also enjoy working independently.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-4 dark:text-neutral-300 max-w-5xl"
      >
        I am open to work opportunities—whether remote, on-site, or hybrid—and
        eager to contribute my skills to dynamic teams and impactful projects.
        Flexible and adaptable, I'm ready to take on new challenges and
        continuously grow as a developer.
      </motion.p>
      <motion.div variants={fadeUp} className="relative mt-6 inline-block">
        <GlowEffect
          colors={[
            "#065F46",
            "#10B981",
            "#14B8A6",
            "#99F6E4",
          ]}
          mode="colorShift"
          blur="medium"
          duration={2}
          scale={0.95}
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              const lenis = (window as any).lenis;
              if (lenis) {
                lenis.scrollTo(contactSection, {
                  offset: 0,
                  duration: 1.2,
                });
              } else {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
          className="relative bg-emerald-600 hover:bg-neutral-200 hover:border-emerald-600 dark:bg-neutral-300 text-black rounded-lg px-5 py-2.5 font-medium dark:hover:bg-emerald-600 hover:border-2 dark:hover:text-neutral-200 transition-colors inline-flex items-center gap-2"
        >
          Contact Me <ArrowRight className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
