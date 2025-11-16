import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";

const VideoIntro = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Replace with your actual video URL (YouTube, Vimeo, or any other embeddable video)
  const videoUrl = "https://www.youtube.com/embed/dYcBFV2hP8A"; // Replace with your video URL

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-tertiary rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              >
                <AiOutlineClose size={24} />
              </button>
              <iframe
                src={videoUrl}
                title="Video Introduction"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative group">
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full transition-all z-10 shadow-lg"
            >
              <AiOutlineClose size={14} />
            </button>

            {/* Video container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative bg-tertiary rounded-2xl overflow-hidden shadow-2xl cursor-pointer border-2 border-[#915EFF]/30 hover:border-[#915EFF] transition-all"
              onClick={() => setIsExpanded(true)}
            >
              <div className="w-80 aspect-video relative">
                <iframe
                  src={videoUrl}
                  title="Video Introduction"
                  className="w-full h-full pointer-events-none"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                
                {/* Overlay with expand icon */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#915EFF] p-3 rounded-full">
                    <FiMaximize2 size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-semibold">👋 Video Introduction</p>
                <p className="text-gray-300 text-xs">Click to expand</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default VideoIntro;
