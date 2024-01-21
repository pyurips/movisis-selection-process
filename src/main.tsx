import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Home from './pages/home.tsx';

const temporaryThemeHandler = true;

const router = createBrowserRouter([
  {
    path: '/',
    //errorElement: <Error />,
    element: (
      <NextUIProvider>
        <main
          className={
            temporaryThemeHandler ? '' : 'dark text-foreground bg-background'
          }
        >
          <App />
        </main>
      </NextUIProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
