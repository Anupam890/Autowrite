import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
