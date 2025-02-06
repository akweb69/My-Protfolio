import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer";
import Navbar from "../Sections/Navbar";
import { useEffect, useState } from "react";
import PrevPage from "../Utils/PrevPage";
import Loader from "../Utils/Loader";

const Home = () => {
    const [display, setDisplay] = useState(false)
    const [load, setLoad] = useState(true)


    useEffect(() => {

        const handleLoad = () => {
            setDisplay(true);
            setLoad(false)
            setTimeout(() => {
                setDisplay(false)
            }, 7000);
        };
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
    }, []);



    return (
        <>{
            load ? <div className=""><Loader></Loader></div> :
                <div className="">

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
                </div>
        }
        </>

    );
};

export default Home;