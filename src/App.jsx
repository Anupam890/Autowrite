import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pricing from "./pages/pricing/Pricing";
import Chatai from "./pages/Dashboard/childrens/Chatai";
import DashHome from "./pages/Dashboard/childrens/DashHome";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Explore } from "./pages/Dashboard/childrens/Explore";
//nested Childrens
import Blog_title from "./pages/Dashboard/childrens/tools/BlogTools/Blog_title";
import History from "./pages/Dashboard/childrens/History";
import Fav from "./pages/Dashboard/childrens/Fav";
// Dashboard Tools 
import BlogTitle from "./pages/Dashboard/childrens/tools/BlogTools/Blog_title";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
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
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "chatai",
        element: <Chatai />,
      },
      {
        path: "home",
        element: <DashHome />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "blog-title",
        element: <Blog_title />,
      },
      {
        path: "history",
        element: <History />,
      },{
        path: "fav",
        element: <Fav />,
      },{
        path: "blog-title",
        element: <BlogTitle />,
      }
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
