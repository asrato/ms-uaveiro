import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
      <section>
        <App />
      </section>
    </main>
    <footer>
      React app test by Rato
    </footer>
  </React.StrictMode>
);