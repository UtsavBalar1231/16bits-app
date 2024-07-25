import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Cart from "./components/Cart.tsx";
import Error404 from "./components/Error404.tsx";
import Checkout from "./components/Checkout.tsx";
import Products from "./components/Products.tsx";
import "nes.icons/css/nes-icons.min.css";
import "nes.css/css/nes.min.css";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
