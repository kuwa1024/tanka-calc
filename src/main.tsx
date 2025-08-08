import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './features/Home/Home.tsx';
import { Sample } from './features/Sample/Sample.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/tanka-calc">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
