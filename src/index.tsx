import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import client from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import AppContext from "./context/AppContext";
//router
import App from "./router/App";
import NotFound from "./router/NotFound";
import PokemonDetails from "./router/PokemonDetails";
import About from "./router/AboutUs";
import RouterLayout from "./components/Layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/pokemon/:id", element: <PokemonDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
