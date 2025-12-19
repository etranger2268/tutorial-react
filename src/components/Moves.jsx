import { Fragment } from 'react';
export default function Moves({ history, onJump }) {
  return (
    <Fragment>
      {history.map((_, move) => (
        <li>
          <button
            type="button"
            onClick={() => onJump(move)}
            className="border bg-gray-50 text-sm px-2"
          >
            {move > 0 ? `Go to move ${move}` : `Go to game start`}
          </button>
        </li>
      ))}
    </Fragment>
  );
}
