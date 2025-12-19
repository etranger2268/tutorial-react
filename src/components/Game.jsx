import { useState } from 'react';
import Board from './Board';
import Moves from './Moves';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([[...Array(9)].map(() => null)]);
  const currentSquares = history.at(-1);

  const handlePlay = (nextSquares) => {
    setHistory((prev) => [...prev, nextSquares]);
    setXIsNext((prev) => !prev);
  };

  const jumpTo = (index) => {};

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
