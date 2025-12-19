import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <>
      <ScrollToTop />
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}

export default App;
