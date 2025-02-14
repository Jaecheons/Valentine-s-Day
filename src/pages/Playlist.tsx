// import React from 'react';
// import { motion } from 'framer-motion';
// import { Music, Heart, Play } from 'lucide-react';

// const songs = [
//   {
//     title: "Paragraph",
//     artist: "Elvis Presley",
//     description: "Because you make falling in love feel this effortless"
//   },
//   {
//     title: "Perfect",
//     artist: "Ed Sheeran",
//     description: "Just like you are to me"
//   },
//   {
//     title: "All of Me",
//     artist: "John Legend",
//     description: "Because you deserve all of my affection"
//   }
// ];

// export default function Playlist() {
//   return (
//     <div className="min-h-screen pt-20 pb-24 px-4">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="max-w-4xl mx-auto"
//       >
//         <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Our Love Playlist</h1>
//         <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
//           Every great love story needs a soundtrack. Here are the songs that remind me of us...
//         </p>
        
//         <div className="space-y-6">
//           {songs.map((song, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
//             >
//               <div className="p-6 flex items-start gap-4">
//                 <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
//                   <Music className="w-6 h-6 text-red-500" />
//                 </div>
                
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-1">{song.title}</h3>
//                   <p className="text-gray-600 mb-3">{song.artist}</p>
//                   <p className="text-gray-700">{song.description}</p>
//                 </div>
                
//                 <button className="p-3 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
//                   <Play className="w-5 h-5" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <p className="text-xl text-gray-700">
//             Each song tells a part of our story... ❤️
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }


import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play } from 'lucide-react';

// Import your local audio files
import song1 from '../music/blue.mp3';
import song2 from '../music/perfect.mp3';
import song3 from '../music/ifwenevermet.mp3';
import song4 from '../music/werealready.mp3';


const songs = [
  {
    title: "Blue",
    artist: "Yung Kai",
    description: "Would you mind if I took your hand tonight?",
    file: song1,
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    description: "Just like you are.",
    file: song2,
  },
  {
    title: "if we never met",
    artist: "John K",
    description: "I love it when the only light, is me, you and the Moon.",
    file: song3,
  },
  {
    title: "We're Already",
    artist: "Kimmuseum",
    description: "You never know if we're not gonna make it out.",
    file: song4,
  },
];

function SongCard({ song, index }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
    >
      <div className="p-6 flex items-center gap-4">
        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Music className="w-7 h-7 text-pink-500" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">{song.title}</h3>
          <p className="text-lg text-gray-600 mb-2">{song.artist}</p>
          <p className="text-gray-700">{song.description}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlay}
          className="p-3 bg-pink-500 rounded-full text-white transition-opacity"
        >
          <Play className="w-5 h-5" />
        </motion.button>
      </div>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={song.file} onEnded={handleAudioEnded} />
    </motion.div>
  );
}

export default function Playlist() {
  return (
    <div className="min-h-screen pt-20 pb-24 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold text-pink-700 text-center mb-4 drop-shadow-lg">
          Our Love Playlist
        </h1>
        <p className="text-center text-gray-800 mb-12 max-w-3xl mx-auto">
          Every great love story needs a soundtrack. Here are the songs that remind me of us, and every beat of our hearts.
        </p>

        <div className="space-y-6">
          {songs.map((song, index) => (
            <SongCard key={index} song={song} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: songs.length * 0.15 + 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-bold text-pink-600">
            Each song tells a part of our story... ❤️
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
