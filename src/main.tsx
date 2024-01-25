import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/home.tsx";
import EbookPerId from "./pages/ebook_per_id.tsx";
import Checkout from "./pages/checkout.tsx";
import { MainProvider } from "./utils/main_context.tsx";

const temporaryThemeHandler = true;

const router = createBrowserRouter([
  {
    path: "/",
    //errorElement: <Error />,
    element: (
      <NextUIProvider>
        <main
          className={
            temporaryThemeHandler ? "" : "dark text-foreground bg-background"
          }
        >
          <App />
        </main>
      </NextUIProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ebook/:id",
        element: <EbookPerId />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
