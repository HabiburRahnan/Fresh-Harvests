import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Page/Home/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Products from "./Page/Product/Products";
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from "./Admin/Page/AddProduct/AddProduct";
import UpdateProduct from "./Admin/Page/UpdateProduct/UpdateProduct";
import { ToastContainer } from "react-toastify";
import CartPage from "./Page/CartPage/CartPage";
import Shop from "./Page/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addProduct',
        element: <AddProduct />
      },
      {
        path: '/updateProduct',
        element: <UpdateProduct />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/shop',
        element: <Shop />
      },

      {
        path: "/products/:id",
        element: (
          <Products />
        ),
        loader: ({ params }) =>
          fetch(
            `https://api-fresh-harvest.code-commando.com/api/v1/products/${params.id}`
          ),
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>

  </React.StrictMode>
);
