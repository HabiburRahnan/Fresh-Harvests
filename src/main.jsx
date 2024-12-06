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
    </Provider>

  </React.StrictMode>
);
