import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pricing from "./pages/pricing/Pricing";
import Chatai from "./pages/Dashboard/childrens/Chatai";
import DashHome from "./pages/Dashboard/childrens/DashHome";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <Navbar /> */}
        <Home />
      </div>
    ),
    errorElement: <Error />,
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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "chatai", // Child route should be relative
        element: <Chatai />,
      },
      {
        path: "home",
        element: <DashHome />,
      },
    ],
  },
  {
    path: "/pricing",
    element: (
      <div>
        <Pricing />
      </div>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
