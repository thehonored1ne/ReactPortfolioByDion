import { useState, useEffect } from 'react';

const MemoryGame = () => {
  const initialIcons = ['🤖', '👽', '👾', '🚀', '💿', '💾', '🔋', '🕹️'];
  
  // Create pairs and shuffle
  const generateDeck = () => {
    const deck = [...initialIcons, ...initialIcons]
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({
        id: index,
        icon,
        isFlipped: false,
        isMatched: false,
      }));
    return deck;
  };

  const [cards, setCards] = useState(generateDeck());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);

  // Handle Card Click
  const handleCardClick = (id) => {
    // Prevent clicking if already 2 flipped or card is already revealed
    if (flippedCards.length === 2) return;
    const clickedCard = cards.find(card => card.id === id);
    if (clickedCard.isFlipped || clickedCard.isMatched) return;

    // Flip the card
    const newCards = cards.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, clickedCard]);
  };


  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      
      if (first.icon === second.icon) {

        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.icon === first.icon ? { ...card, isMatched: true } : card
          ));
          setMatchedCount(prev => prev + 1);
          setFlippedCards([]);
        }, 500); 

      } else {
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first.id || card.id === second.id 
              ? { ...card, isFlipped: false } 
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  const resetGame = () => {
    setCards(generateDeck());
    setMatchedCount(0);
    setFlippedCards([]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-900 text-white p-4 select-none">
      
      <div className="flex justify-between w-full max-w-sm mb-4 font-mono text-green-400">
        <span>MATCHES: {matchedCount} / {initialIcons.length}</span>
        <button onClick={resetGame} className="hover:underline hover:text-white">RESET</button>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl rounded cursor-pointer transition-all duration-300 transform
              ${card.isFlipped || card.isMatched ? 'rotate-y-180 bg-gray-800 border-2 border-green-500' : 'bg-green-900 hover:bg-green-800'}
            `}
          >
            {/* Show icon only if flipped or matched */}
            {(card.isFlipped || card.isMatched) ? card.icon : '?'}
          </div>
        ))}
      </div>

      {matchedCount === initialIcons.length && (
        <div className="mt-6 text-xl font-bold text-yellow-400 animate-bounce">
          VICTORY!
        </div>
      )}
    </div>
  );
};

export default MemoryGame;