import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import song1 from '../music/perfect.mp3';
import song2 from '../music/blue.mp3';

const playlist = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    url: song1
  },
  {
    title: "blue",
    artist: "Yung Kai",
    url: song2
  },

];

export default function MusicPlayer() {
  const { play, pause, playing, load } = useAudioPlayer();
  const [currentSong, setCurrentSong] = React.useState(0);

  React.useEffect(() => {
    load(playlist[currentSong].url, {
      autoplay: false,
      format: 'mp3'
    });
  }, [currentSong, load]);

  const togglePlayPause = () => {
    if (playing) {
      pause();
    } else {
      play();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-pink-100 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentSong(prev => (prev > 0 ? prev - 1 : playlist.length - 1))}
              className="p-2 hover:bg-pink-50 rounded-full"
            >
              <SkipBack className="w-5 h-5 text-red-500" />
            </button>
            
            <button
              onClick={togglePlayPause}
              className="p-3 bg-red-500 hover:bg-red-600 rounded-full text-white"
            >
              {playing ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setCurrentSong(prev => (prev < playlist.length - 1 ? prev + 1 : 0))}
              className="p-2 hover:bg-pink-50 rounded-full"
            >
              <SkipForward className="w-5 h-5 text-red-500" />
            </button>
          </div>
          
          <div className="flex-1 mx-8">
            <p className="text-sm font-medium text-gray-800">{playlist[currentSong].title}</p>
            <p className="text-xs text-gray-500">{playlist[currentSong].artist}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-gray-500" />
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}