import { Outlet} from "react-router";
import Navbar from '../shared/Navbar';
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar here  */}
           <div>
             <Navbar />
          </div>

            {/* Outlet for nested routes */}
          <div>
            <Outlet />
          </div>

            {/* Footer here */}
          <div>
            <Footer/>
          </div>
        </div>
    );
};

export default MainLayout;