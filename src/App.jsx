import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
