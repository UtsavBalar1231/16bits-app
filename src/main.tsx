import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Cart from "./components/Cart.tsx";
import Error404 from "./components/Error404.tsx";
import Checkout from "./components/Checkout.tsx";
import Products from "./components/Products.tsx";
import "./index.css";
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
    errorElement: <Error404 />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <Error404 />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <Error404 />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
