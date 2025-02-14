import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const emojis = ['❤️', '💖', '💝', '💕', '💗', '💓', '💘', '💞'];
const cards = [...emojis, ...emojis];

export default function Game() {
  const [flipped, setFlipped] = React.useState<number[]>([]);
  const [matched, setMatched] = React.useState<number[]>([]);
  const [disabled, setDisabled] = React.useState(false);
  const [score, setScore] = React.useState(0);
  
  const shuffledCards = React.useMemo(() => {
    return cards.sort(() => Math.random() - 0.5);
  }, []);

  const handleClick = (index: number) => {
    if (disabled || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setDisabled(true);
      
      if (shuffledCards[newFlipped[0]] === shuffledCards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setScore(score + 1);
        setFlipped([]);
        setDisabled(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Memory Game</h1>
        <p className="text-center text-gray-700 mb-8">
          Match the love symbols! Score: {score}/{emojis.length}
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {shuffledCards.map((emoji, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(index)}
              className={`aspect-square rounded-xl text-3xl flex items-center justify-center ${
                flipped.includes(index) || matched.includes(index)
                  ? 'bg-white'
                  : 'bg-red-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {flipped.includes(index) || matched.includes(index) ? (
                emoji
              ) : (
                <Heart className="w-8 h-8 text-white" />
              )}
            </motion.button>
          ))}
        </div>

        {matched.length === cards.length && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center mt-8"
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Congratulations! 🎉
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}