import { LINES } from '../constants';

export const calculateWinner = (squares) => {
  const winningLine = LINES.find(
    ([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[b] === squares[c],
  );
  return winningLine ? squares[winningLine[0]] : null;
};
