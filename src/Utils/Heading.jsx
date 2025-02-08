
const Heading = ({ one, two }) => {
    return (
        <div className="w-11/12 mx-auto py-10 md:py-14">
            <h1 className="text-4xl md:text-6xl font-bold py-2 bg-gradient-to-tr from-orange-600 to-indigo-700 text-transparent bg-clip-text w-fit mx-auto text-center ">{one}</h1>
            <p className="text-center text-gray-400 font-semibold py-2">{two}</p>
        </div>
    );
};

export default Heading;