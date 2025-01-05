import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;