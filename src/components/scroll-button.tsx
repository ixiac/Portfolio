import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        const lenis = (window as any).lenis;
        if (lenis) {
            lenis.scrollTo(0, {
                offset: 0,
                duration: 1.2,
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ 
                        opacity: 0, 
                        y: 50,
                        scale: 0.8
                    }}
                    animate={{ 
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}
                    exit={{ 
                        opacity: 0,
                        y: 50,
                        scale: 0.8
                    }}
                    transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                    whileHover={{ 
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-4 z-50 text-white border-neutral-400 dark:border-neutral-600 border-2 hover:border-emerald-600 dark:hover:border-neutral-600 
                bg-emerald-600 dark:hover:bg-emerald-600 dark:bg-neutral-800 p-3 hover:text-emerald-600 dark:hover:text-primary cursor-pointer rounded-full shadow-lg"
                    aria-label="Scroll to top"
                >
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <ChevronUp size={24} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};