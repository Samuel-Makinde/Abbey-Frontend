
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./index.css";
import { store, persistor } from './store'; 
import { ToastContainer } from 'react-toastify';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
            <ToastContainer />
          </Router>
        </PersistGate>
      </Provider>
    </StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there's an element with id 'root' in your HTML.");
}
