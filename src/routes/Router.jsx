import { Routes, Route } from "react-router";

import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog/Blog";

const Router = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Route>

      {/* Catch-all for 404 Error Page */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
