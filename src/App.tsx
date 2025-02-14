import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, ChevronLeft } from 'lucide-react';
import Intro from './pages/Intro';
import Story from './pages/Story';
import DatePlan from './pages/DatePlan';
import WhyMe from './pages/WhyMe';
import WhyYou from './pages/WhyYou';
import Gallery from './pages/Gallery';
import Playlist from './pages/Playlist';
import Game from './pages/Game';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Intro /></PageTransition>} />
        <Route path="/story" element={<PageTransition><Story /></PageTransition>} />
        <Route path="/date-plan" element={<PageTransition><DatePlan /></PageTransition>} />
        <Route path="/why-me" element={<PageTransition><WhyMe /></PageTransition>} />
        <Route path="/why-you" element={<PageTransition><WhyYou /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/playlist" element={<PageTransition><Playlist /></PageTransition>} />
        <Route path="/game" element={<PageTransition><Game /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setIsSidebarOpen(false);
      } else if (e.key === 'ArrowRight') {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
        <Navigation isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`transition-all duration-300 ${isHomePage ? '' : isSidebarOpen ? 'md:ml-60' : ''}`}>
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 pt-16 md:pt-0">
            <AnimatedRoutes />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <MusicPlayer />
        </div>
      </div>
    </BrowserRouter>
  );
}
