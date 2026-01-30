import { motion } from "framer-motion";
import type { ToolsType } from "@/types";
import { useEffect, useState } from "react";

export const ToolsCarousel = ({ tools }: { tools: ToolsType[] }) => {
  const duplicatedTools = [...tools, ...tools, ...tools];
  
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-8"
        animate={{
          x: [0, -((tools.length * 120) + (tools.length * 32))],
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
          <div
            key={`${tool.label}-${index}`}
            className="flex-shrink-0 w-[120px] h-[120px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center gap-3 p-4"
          >
            <img
              src={tool.imgSrc}
              alt={tool.label}
              className="w-12 h-12 object-contain"
            />
            <span className="text-sm font-medium text-neutral-300 text-center">
              {tool.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};