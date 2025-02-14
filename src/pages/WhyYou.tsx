import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile, Sun, Award } from 'lucide-react';

const reasons = [
  {
    title: "You",
    description: "Your kindness and compassion light up every room you enter.",
    icon: Sparkles
  },
  {
    title: "Your Amazing Smile",
    description: "The way your smile lights me up whenever I see it.",
    icon: Heart
  },
  {
    title: "Your Brilliant Mind",
    description: "Your intelligence and confidence inspire me every day.",
    icon: Star
  },
  {
    title: "Your Sleepiness",
    description: "I did not think that someone could rival me in sleeping, our battle will be legendary.",
    icon: Smile
  },
  {
    title: "Your Radiant Energy",
    description: "Your vibrant energy makes every moment exciting and memorable.",
    icon: Sun
  },
  {
    title: "Your Unforgettable Eyes",
    description: "Your eyes captivates me with effortless grace.",
    icon: Award
  }
];

export default function WhyYou() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-pink-600 text-center mb-4">
          Why You're Special
        </h1>
        <p className="text-center text-gray-800 mb-12 max-w-3xl mx-auto">
          There are countless reasons why I like you. 
        </p>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center group hover:shadow-2xl transition-all"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                  className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="w-10 h-10 text-pink-500" />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reasons.length * 0.15 }}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-3xl font-bold text-pink-600"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            Will you be my Valentine? ❤️
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
