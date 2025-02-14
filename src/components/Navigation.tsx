import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Heart, BookOpen, Calendar, User, FolderHeart as UserHeart, Image, Music, TowerControl as GameController } from 'lucide-react';
import { motion } from 'framer-motion';

const routes = [
  { path: '/story', icon: BookOpen, label: 'Our Story' },
  { path: '/date-plan', icon: Calendar, label: 'Date Plan' },
  { path: '/why-me', icon: User, label: 'Why Me' },
  { path: '/why-you', icon: UserHeart, label: 'Why You' },
  { path: '/gallery', icon: Image, label: 'Gallery' },
  { path: '/playlist', icon: Music, label: 'Playlist' },
  { path: '/game', icon: GameController, label: 'Fun Game' }
];

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(true);
  
  if (location.pathname === '/') return null;
  
  return (
    <motion.div 
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -240 }}
      className="fixed top-0 left-0 h-full bg-white/90 backdrop-blur-sm shadow-lg z-50 flex"
    >
      <div className="w-60 p-6">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500" />
          <span className="font-semibold text-xl text-red-600">Valentine's</span>
        </div>
        
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === route.path
                  ? 'bg-red-500 text-white'
                  : 'hover:bg-red-50 text-gray-700'
              }`}
            >
              <route.icon className="w-5 h-5" />
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-6 absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-red-500 text-white rounded-r-lg"
      >
        {isOpen ? '←' : '→'}
      </button>
    </motion.div>
  );
}