import { motion } from "framer-motion";
import type { ToolsType } from "@/types";

export const ToolsCarousel = ({ tools }: { tools: ToolsType[] }) => {
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <div
      className="overflow-hidden relative border-2 rounded-lg border-emerald-600 "
      style={{
        boxShadow:
          "inset 0 6px 20px rgba(0, 0, 0, 0.35), inset 0 -6px 15px rgba(0, 0, 0, 0.25)",
      }}
    >
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -(tools.length * 120 + tools.length * 32)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <motion.div
            key={`${tool.label}-${index}`}
            className="flex-shrink-0 w-[120px] h-[120px] flex flex-col items-center justify-center gap-3 p-4 cursor-pointer"
            whileHover={{
              scale: 1.25,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
              },
            }}
          >
            <img
              src={tool.imgSrc}
              alt={tool.label}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium dark:text-neutral-300 text-center">
              {tool.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
