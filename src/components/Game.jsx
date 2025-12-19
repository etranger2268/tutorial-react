import { useState } from 'react';
import Board from './Board';
import Moves from './Moves';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([[...Array(9)].map(() => null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext((prev) => !prev);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
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
