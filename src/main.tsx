import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from "@/components/theme-provider"
import Layout from '@/layout';
import Dashboard from '@/routes/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
