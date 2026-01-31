import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/constants/animations";
import { SparkleIcon, Download, Eye, X } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [showPDF, setShowPDF] = useState(false);
  
  const pdfPath = '/Bien Marlon Q. Maranan CV.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Bien Marlon Maranan - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
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
          <SparkleIcon size={15} className="font-medium dark:text-white" />
          <span className="font-semibold dark:text-white">Introduction</span>
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="dark:text-neutral-200 text-4xl md:text-4xl lg:text-6xl font-medium capitalize mt-4 max-w-3xl md:leading-16"
        >
          I'm{" "}
          <span className="text-emerald-500 font-semibold">
            Bien Marlon Maranan
          </span>
          , a Full-Stack Web Developer & Data Analyst.
        </motion.h1>
        <motion.p variants={fadeUp} className="dark:text-neutral-300 mt-8 max-w-2xl">
          I build responsive, user-friendly full-stack web applications
          and analyze data to improve system performance and user experience. I
          focus on building reliable solutions while continuously improving my
          skills and adapting to new technologies.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 max-w-2xl flex gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setShowPDF(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2"
          >
            <span className="text-sm">View CV</span>
            <Eye size={16} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={handleDownload}
            className="border border-emerald-600 text-emerald-600 dark:text-emerald-400 px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-600 hover:text-white dark:hover:text-white transition-all flex items-center gap-2"
          >
            <span className="text-sm">Download CV</span>
            <Download size={16} />
          </motion.button>
        </motion.div>
      </motion.section>

      {showPDF && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowPDF(false);
          }}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-2xl w-full max-w-5xl h-[88vh] flex flex-col shadow-2xl border border-gray-200/50 dark:border-neutral-700/50"
          >
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200/50 dark:border-neutral-700/50">
              <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                CV Preview
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-1.5 text-sm shadow-md hover:shadow-lg"
                >
                  <Download size={14} />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={() => setShowPDF(false)}
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-all text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 p-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 rounded-b-2xl overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 dark:ring-neutral-700/50">
                <iframe
                  src={pdfPath}
                  className="w-full h-full border-0"
                  title="CV PDF Viewer"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};