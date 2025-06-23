import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


const Router = () => {
  return (
    <Routes>
         {/* Main Routes */}
      <Route path="/" element={<MainLayout />}></Route>
      <Route index element={<Home />} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default Router;