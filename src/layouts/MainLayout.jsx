import { Outlet } from "react-router-dom";
import Footer from "../modules/shared/components/Footer";
import Navbar from "../modules/shared/components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;