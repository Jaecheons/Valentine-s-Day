// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const routes = ['/', '/story', '/date-plan', '/why-me', '/why-you', '/gallery', '/playlist', '/game'];

// export default function PageTransition({ children }: { children: React.ReactNode }) {
//   const navigate = useNavigate();
//   const currentIndex = routes.indexOf(window.location.pathname);
//   const nextRoute = routes[currentIndex + 1];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className="relative"
//     >
//       {children}
      
//       {nextRoute && (
//         <motion.div 
//           className="fixed bottom-24 right-8 z-50"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <button
//             onClick={() => navigate(nextRoute)}
//             className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//           >
//             Continue Journey
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const routes = ['/', '/story', '/date-plan', '/why-me', '/why-you', '/gallery', '/playlist', '/game'];

// export default function PageTransition({ children }: { children: React.ReactNode }) {
//   const navigate = useNavigate();
//   const currentIndex = routes.indexOf(window.location.pathname);
//   const nextRoute = routes[currentIndex + 1];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className="relative"
//     >
//       {children}
      
//       {/* Only render the button if this is not the begin journey page */}
//       {(currentIndex !== 0 && nextRoute) && (
//         <motion.div 
//           className="fixed bottom-24 right-8 z-50"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <button
//             onClick={() => navigate(nextRoute)}
//             className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
//           >
//             Continue Journey
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }




import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const routes = ['/', '/story', '/date-plan', '/why-me', '/why-you', '/gallery', '/playlist', '/game'];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const currentIndex = routes.indexOf(window.location.pathname);
  const nextRoute = routes[currentIndex + 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {children}
      
      {/* Render the "Continue Journey" button if not on the beginning page */}
      {(currentIndex !== 0 && nextRoute) && (
        <motion.div 
          className="fixed bottom-32 md:bottom-24 right-8 z-50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => navigate(nextRoute)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 mb-10 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Continue Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

