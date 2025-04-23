import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ForgotPass from "./pages/auth/ForgotPass";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPass />,
    },
    {
      path: "/generate",
      children: [
        {
          path: "",
          element: <h1>Generate</h1>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
