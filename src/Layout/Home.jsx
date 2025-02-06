import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useEffect, useState } from "react";
import PrevPage from "../Utils/PrevPage";
import Loader from "../Utils/Loader";

const Home = () => {
    const [display, setDisplay] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        // Simulating a loading state instead of relying on window.load
        setTimeout(() => {
            setLoad(false);
            setDisplay(true);

            setTimeout(() => {
                setDisplay(false);
            }, 7000);
        }, 2000); // Simulating an initial load delay
    }, []);

    return (
        <>
            {load ? (
                <Loader />
            ) : display ? (
                <PrevPage />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
