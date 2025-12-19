import { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([[...Array(9)].map(() => null)]);
  const currentSquares = history.at(-1);

  const handlePlay = (nextSquares) => {
    setHistory((prev) => [...prev, nextSquares]);
    setXIsNext((prev) => !prev);
  };

  return (
    <div className="flex flex-row">
      <div className="ml-5">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
