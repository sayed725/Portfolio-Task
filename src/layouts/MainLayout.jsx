import { Outlet} from "react-router";
import Navbar from '../shared/Navbar';
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div className="text-white bg-[url(/repeated-square-dark.webp)] min-h-screen">
            {/* Navbar here  */}
           <div className="w-11/12 mx-auto"> 
             <Navbar />
          </div>

            {/* Outlet for nested routes */}
          <div className="w-11/12 mx-auto">
            <Outlet />
          </div>

            {/* Footer here */}
          <div className="w-11/12 mx-auto">
            <Footer/>
          </div>
        </div>
    );
};

export default MainLayout;