import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/pasteldobem" element={<App />} />
        <Route path="*" element={<h1 className='mx-auto'>Página não encontrada - 404</h1>} />
      </Routes>
    </Router>
  </StrictMode>
);
