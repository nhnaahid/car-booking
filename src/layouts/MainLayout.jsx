import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="font-inter">
            <div className="h-[64px] lg:h-[72px]">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <Toaster />
        </div>
    );
};

export default MainLayout;