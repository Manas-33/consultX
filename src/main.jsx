import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
import { NextUIProvider } from "@nextui-org/react";

const PUBLISHABLE_KEY = "pk_test_bW9kZWwtcG9sZWNhdC0xLmNsZXJrLmFjY291bnRzLmRldiQ"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <App />
        </Router>
      </ClerkProvider>
    </NextUIProvider>
  </React.StrictMode>
);
