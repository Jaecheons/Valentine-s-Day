import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Utensils, Music,  } from 'lucide-react';

const dateSteps = [
  {
    time: "6:00 PM",
    title: "Sunset Dinner",
    location: "Levitate Rooftop Restaurant",
    description: "A romantic dinner with a breathtaking view of the city",
    icon: Utensils
  },
  {
    time: "8:00 PM",
    title: "Evening Walk",
    location: "Any Place you want",
    description: "A peaceful stroll, Just me, you and the Moon",
    icon: MapPin
  },
  {
    time: "9:00 PM",
    title: "Binge in a K-Drama and Order in",
    location: "Your place or Mine",
    description: "The sleepy duo in their natural habitat together",
    icon: Music
  }
];

export default function DatePlan() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-red-600 text-center mb-12">Our Special Evening</h1>
        
        <div className="space-y-8">
          {dateSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {step.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>{step.location}</span>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}



