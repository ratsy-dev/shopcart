import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Loader from "../components/Loader.jsx";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Loader />
      </div>
    );
  }

  // 👇 If user is logged in → prevent access to login & signup
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
