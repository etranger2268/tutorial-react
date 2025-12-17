import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Board from './Board.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Board />
  </StrictMode>,
);
