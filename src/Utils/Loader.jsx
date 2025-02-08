import loader from "../assets/videos/Cyberpunk Aesthetic.gif"



const Loader = () => {

    return (
        <>
            {/* <div className="flex justify-center items-center w-full h-screen bg-gray-100">
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div> */}
            <div className="w-full min-h-screen flex justify-center items-center">
                <img className="w-full h-screen md:h-full md:object-center object-cover" src={loader} alt="" />
            </div>
        </>
    );
};

export default Loader;
