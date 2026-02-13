import { socialLinks } from "@/constants";
import { ModeToggle } from "@/components/contents/mode-toggle";
import { Tilt } from "@/components/ui/tilt";
import { BorderTrail } from "@/components/ui/border-trail";
import { GlowEffect } from "@/components/ui/glow-effect";
import { useState } from "react";
import { motion } from "framer-motion";

export const Profile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="lg:sticky lg:top-6 lg:self-start m-6 mt-13"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      <Tilt rotationFactor={1.0} isRevese>
        <div 
          className="relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <GlowEffect
              colors={["#065F46", "#10B981", "#14B8A6", "#99F6E4"]}
              mode="colorShift"
              blur="medium"
              duration={2}
              scale={0.95}
            />
          )}
          <aside
            className="relative max-w-3xl border border-1 dark:border-2 border-emerald-600 bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 text-neutral-700 dark:text-white p-6 rounded-lg lg:w-96"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-x-10">
                <h1 className="text-xl text-black dark:text-white font-bold">
                  Bien Marlon
                </h1>
                <p className="text-sm text-emerald-600">Developer & Analyst</p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[300px] aspect-square rounded-2xl">
                  <img
                    src="/bien.jpg"
                    alt="Bien's Profile"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                  <BorderTrail
                    size={160}
                    style={{
                      boxShadow:
                        "0px 0px 40px 15px rgb(16 185 129 / 40%), 0 0 80px 30px rgb(16 185 129 / 30%)",
                    }}
                    className="bg-emerald-500 rounded-2xl"
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-sm dark:text-neutral-300">Specialization: </p>
                <p className="text-sm capitalize">
                  Web Application Development & Data Analytics
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-sm dark:text-neutral-300">Based in: </p>
                <p className="text-sm capitalize">Batangas, Philippines</p>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-sm dark:text-neutral-300">Status:</p>
                <p className="text-sm text-green-600 dark:text-green-500 capitalize">
                  Open to work
                </p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pl-0 p-2 dark:text-neutral-300 hover: transition-all duration-400 ease-in-out hover:text-emerald-500 dark:hover:text-emerald-500 hover:scale-115"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-1">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Tilt>
    </motion.div>
  );
};