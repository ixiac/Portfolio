import { motion } from "motion/react";
import { fadeUp } from "@/constants/animations";
import { SparkleIcon } from "lucide-react";

export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center py-1 gap-2 w-42 "
      >
        <SparkleIcon size={15} className="font-medium dark:text-white mt-4" />{" "}
        <span className="font-semibold dark:text-white mt-4">{title}</span>
      </motion.p>

      <motion.h2 variants={fadeUp}>
        <span className="text-4xl md:text-4xl lg:text-5xl font-medium capitalize mt-4 dark:text-neutral-200">
          {subtitle}
        </span>
      </motion.h2>
    </>
  );
};
