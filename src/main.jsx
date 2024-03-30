import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';
// import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from '@mantine/core';

const PUBLISHABLE_KEY = "pk_test_bW9kZWwtcG9sZWNhdC0xLmNsZXJrLmFjY291bnRzLmRldiQ"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <Router>
            <App />
          </Router>
        </ClerkProvider>
    </MantineProvider>
  </React.StrictMode>
);
