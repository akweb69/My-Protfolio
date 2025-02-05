import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useState } from "react";
import PrevPage from "../Utils/PrevPage";

const Home = () => {
    const [display, setDisplay] = useState(true)

    setTimeout(() => {
        setDisplay(false)
    }, 7000);
    return (
        <>
            {
                display ? <div className="">
                    <PrevPage></PrevPage>
                </div>
                    : <div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
            }
        </>

    );
};

export default Home;