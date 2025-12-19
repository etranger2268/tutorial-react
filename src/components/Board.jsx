import { Fragment } from 'react';
import { calculateWinner } from '../utils/calculateWinner';
import Square from './Square';

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `NextPlayer: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = squares.map((val, i) => (i === index ? (xIsNext ? 'X' : 'O') : val));
    onPlay(nextSquares);
  };

  return (
    <Fragment>
      <div className="mb-2.5">{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </Fragment>
  );
}
