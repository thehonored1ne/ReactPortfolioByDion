import { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // Winning combinations indices
  const winnerPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  const checkWinner = (squares) => {
    for (let i = 0; i < winnerPatterns.length; i++) {
      const [a, b, c] = winnerPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Prevent clicking if occupied or game over

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-900 text-white p-4 font-mono select-none">
      
      {/* Header / Status */}
      <div className="mb-6 text-xl font-bold text-center">
        {winner ? (
          <span className="text-green-400 animate-pulse">WINNER: {winner}</span>
        ) : isDraw ? (
          <span className="text-yellow-400">DRAW GAME</span>
        ) : (
          <span className="text-blue-300">PLAYER TURN: {isXNext ? 'X' : 'O'}</span>
        )}
      </div>

      {/* The Game Grid */}
      <div className="grid grid-cols-3 gap-2 bg-gray-700 p-2 rounded-lg shadow-2xl">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`
              w-16 h-16 sm:w-20 sm:h-20 text-4xl font-bold rounded flex items-center justify-center transition-all
              ${cell ? 'cursor-default' : 'hover:bg-gray-600 active:scale-95'}
              ${cell === 'X' ? 'text-cyan-400 bg-gray-800' : ''}
              ${cell === 'O' ? 'text-pink-500 bg-gray-800' : ''}
              ${!cell ? 'bg-gray-800' : ''}
            `}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button 
        onClick={resetGame}
        className="mt-8 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-lg transition-colors border-b-4 border-green-800 active:border-b-0 active:translate-y-1"
      >
        RESTART GAME
      </button>
    </div>
  );
};

export default TicTacToe;