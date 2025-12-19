import { Fragment } from 'react';
import { v4 } from 'uuid';
import { BOARD_ROWS } from '../constants';
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
      {BOARD_ROWS.map((row) => (
        <div key={v4()} className="flex">
          {row.map((val) => (
            <Square key={v4()} value={squares[val]} onSquareClick={() => handleClick(val)} />
          ))}
        </div>
      ))}
    </Fragment>
  );
}
