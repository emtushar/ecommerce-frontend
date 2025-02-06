import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ProductContainer from "./components/ProductContainer.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ShoppingCart from "./components/ShoppingCart.jsx";
import CheckoutProcess from "./components/CheckoutProcess.jsx";
import SearchPage from "./components/SearchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <ProductContainer /> },
      { path: "product/:id", element: <ProductDetailPage /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "checkout", element: <CheckoutProcess /> },
      { path: "search/:category", element: <SearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
