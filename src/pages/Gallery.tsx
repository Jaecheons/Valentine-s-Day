import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import gallery1 from '../img/gallery1.jpg'
import gallery2 from '../img/gallery2.jpg'
import gallery3 from '../img/gallery3.jpg'

const photos = [
  {
    url: img1,
    caption: "The most pretty"
  },
  {
    url: img2,
    caption: "The cutest"
  },
  {
    url: img3,
    caption: "Pulchritudinous of them all"
  },
  {
    url: gallery1,
    caption: "Strawberry guy"
  },
  {
    url: gallery2,
    caption: "Geek"
  },
  {
    url: gallery3,
    caption: "Loverboy"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-purple-600 text-center mb-4 drop-shadow-lg">
          US?
        </h1>
        <p className="text-center text-gray-800 mb-12 max-w-3xl mx-auto">
           Each photo tells a story. When can we make ours?
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl aspect-square"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4"
              >
                <p className="text-white text-lg font-medium drop-shadow-md">
                  {photo.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: photos.length * 0.15, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-3xl font-bold text-purple-600">
            Let's see where we go.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
