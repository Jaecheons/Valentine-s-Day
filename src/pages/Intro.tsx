import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  // Envelope animation: rotate, scale, and fade out concurrently.
  const envelopeVariants = {
    closed: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    },
    open: {
      rotateX: -180,
      rotateY: [0, 0, -5, 5, 0],
      scale: [1, 1.1, 1.05],
      opacity: 0, // fade out concurrently with the rotation
      filter: ['blur(0px)', 'blur(2px)', 'blur(4px)'],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Flap of the envelope.
  const flapVariants = {
    closed: {
      rotateX: 0,
      originY: 0,
    },
    open: {
      rotateX: -180,
      originY: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  // Letter content animation: fade in, slide up, and remove blur.
  const contentVariants = {
    closed: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: "blur(5px)",
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-red-200/20 to-pink-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5, 1],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Letter Content (always rendered underneath) */}
      <motion.div
        className="max-w-2xl w-full relative z-10"
        variants={contentVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ willChange: "opacity, transform, filter" }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Heart className="w-20 h-20 text-red-500 mx-auto mb-8" />
        </motion.div>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
            Yo Suhani
          </h1>
          
          <div className="space-y-4 mb-8 text-gray-700">
            <p className="text-lg leading-relaxed">
              Well you always think that life gives you all Ls, well let me try and become your first W.
            </p>
            <p className="text-lg leading-relaxed">
              Well I have never done this properly but I like you a lot so.........
            </p>
            <p className="text-xl font-medium text-red-500 text-center mt-8">
              Will you be my Valentine?
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              to="/story" 
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Begin Our Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Envelope on Top */}
      <motion.div
        className="cursor-pointer absolute z-20"
        onClick={handleEnvelopeClick}
        variants={envelopeVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ willChange: "transform, opacity, filter" }}
      >
        <div className="relative">
          {/* Envelope Body */}
          <motion.div
            className="w-[400px] h-[280px] bg-gradient-to-br from-red-100 to-pink-50 rounded-lg shadow-xl flex items-center justify-center transform-gpu relative overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0">
              {/* Left Triangle */}
              <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[200px] border-b-[140px] border-l-transparent border-b-red-200/50" />
              {/* Right Triangle */}
              <div className="absolute right-0 bottom-0 w-0 h-0 border-r-[200px] border-b-[140px] border-r-transparent border-b-red-200/50" />
              {/* Bottom Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-red-200/30" />
            </div>

            {/* Envelope Flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 w-0 h-0 border-l-[200px] border-r-[200px] border-t-[140px] border-l-transparent border-r-transparent border-t-red-300"
              style={{ transformOrigin: 'top' }}
              variants={flapVariants}
              animate={isOpen ? "open" : "closed"}
            >
              <div className="absolute top-[-140px] left-[-200px] right-[-200px] h-[140px] bg-gradient-to-b from-red-200/50 to-transparent" />
            </motion.div>

            {/* Envelope Seal */}
            <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Click Instruction (hidden after click) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600/80 text-lg font-medium"
            animate={{ opacity: isOpen ? 0 : [0, 1, 0], y: isOpen ? 0 : [0, -5, 0] }}
            transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
          >
            Click to open
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
