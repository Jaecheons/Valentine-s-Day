import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Coffee, Book, Music, Camera, Check } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: "I Promise To",
    points: [
      "Always be there for you, through thick and thin",
      "Make you laugh even on your worst days",
      "Support your dreams and ambitions",
      "Be your best friend and biggest cheerleader"
    ]
  },
  {
    icon: Star,
    title: "What I Bring",
    points: [
      "Unconditional support",
      "Adventure and spontaneity, you will never be bored",
      "Paper Rings",
      "Partner in crime for life's journey and Lazy Duo for life"
    ]
  },
  {
    icon: Coffee,
    title: "Fueling Creativity",
    points: [
      "A spark of inspiration in every conversation",
      "Endless energy",
      "A fresh perspective with every cup"
    ]
  },
  {
    icon: Book,
    title: "Lifelong Learning",
    points: [
      "Curiosity that never fades",
      "Embracing new ideas and perspectives",
      "Sharing knowledge and wisdom",
      "Growing together through every experience"
    ]
  },
  {
    icon: Music,
    title: "Melodic Inspiration",
    points: [
      "Creating harmony in chaos",
      "Bringing rhythm to life",
      "Infusing joy with every beat",
      "Transforming moments into memories"
    ]
  },
  {
    icon: Camera,
    title: "Capturing Moments",
    points: [
      "Turning fleeting moments into timeless memories",
      "Seeing beauty in the ordinary",
      "Documenting life's adventures",
      "Framing emotions in a single shot"
    ]
  }
];

export default function WhyMe() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-4">
          Why Take Me?
        </h1>
        <p className="text-center text-black mb-12">
          Discover the uniqueness of this geek.
        </p>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-10 h-10 text-red-500" />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>
              
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.2) + (pointIndex * 0.1) }}
                    className="flex items-start gap-2"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
