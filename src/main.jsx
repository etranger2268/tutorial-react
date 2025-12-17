import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Square from './Square.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Square />
  </StrictMode>,
);
