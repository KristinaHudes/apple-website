import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from 'react-error-boundary';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const errorHandler: ErrorBoundaryPropsWithRender['onError'] = (error, info) => {
  console.error('Error caught in ErrorBoundary:', error, info);
};

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={() => <h1>Something went wrong.</h1>}
      onError={errorHandler}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
