import { useState } from 'react';
import Board from './Board';
import Moves from './Moves';

export default function Game() {
  const [history, setHistory] = useState([[...Array(9)].map(() => null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextMove = currentMove + 1;
    setHistory((prev) => [...prev.slice(0, nextMove), nextSquares]);
    setCurrentMove(nextMove);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setHistory((prev) => prev.slice(0, nextMove + 1));
  };

  return (
    <div className="flex flex-row space-x-8">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="ml-5 mt-8">
        <ol className="space-y-1 list-decimal">
          <Moves history={history} onJump={jumpTo} />
        </ol>
      </div>
    </div>
  );
}
