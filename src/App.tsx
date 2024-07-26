import Home from "./components/Home.tsx";
import Layout from "./components/Layout.tsx";
import About from "./components/About.tsx";
import Cart from "./components/Cart.tsx";
import Error404 from "./components/Error404.tsx";
import Checkout from "./components/Checkout.tsx";
import Products from "./components/Products.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
