import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store.ts';
import { Tanka } from './features/tanka/components/Tanka.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/tanka-calc">
          <Routes>
            <Route path="/" element={<Tanka />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
