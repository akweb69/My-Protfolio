import { motion } from 'framer-motion';
import img2 from "../assets/images/visa.png"
import { Link } from 'react-router-dom';
import img22 from "../assets/images/Screenshot 2025-01-30 070904.png"
const Projects = () => {
    return (
        <div className="bg-[rgb(0,0,31)] py-10 md:py-20 flex flex-col items-center justify-center w-11/12 mx-auto">
            {/* Title */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-8">
                My Projects
            </h2>
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6">
                Explore My Latest Projects
            </h3>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
                {/* card --00 */}
                <motion.div

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] relative overflow-hidden group"
                >
                    <img
                        src={img22}
                        alt="Unigrants Website"
                        referrerPolicy='no-referrer'
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-bold text-white mb-4">Unigrants</h3>
                    <p className="text-xl font-semibold text-gray-300">Discover Scholarships, Build Your Future</p>
                    <p className="text-gray-300 mb-4">The UniGrants project will have a modern, professional, and interactive theme. The design should be clean, user-friendly, and visually appealing, ensuring an intuitive experience for students searching for scholarships and universities.</p>

                    {/* Hover effect and buttons */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            to={"https://luxestay-ak.netlify.app"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Live Link
                        </Link>
                        <Link
                            to={"https://github.com/akweb69/LuxeStay"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            to={`/project-details/${1}`}
                        >
                            View Details
                        </Link>
                    </div>
                </motion.div>
                {/* card-01 */}
                <motion.div

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] relative overflow-hidden group"
                >
                    <img
                        src="https://camo.githubusercontent.com/f2abbee040e8add8c13e4f92c252c706f88564df9e1bee4b7b37827fb51b2fe7/68747470733a2f2f692e6962622e636f2e636f6d2f577072704654782f53637265656e73686f742d323032342d31322d32362d3137323335382e706e67"
                        alt="Visa Quest Website"
                        referrerPolicy='no-referrer'
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">LuxeStay</h3>
                    <p className="text-xl font-semibold text-gray-300">Find Your Perfect Stay, Anywhere</p>
                    <p className="text-gray-300 mb-4">LuxeStay is a premium hotel booking platform that redefines luxury and comfort. With a seamless user interface and cutting-edge technology, LuxeStay provides an elegant solution for booking world-class accommodations.</p>

                    {/* Hover effect and buttons */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            to={"https://luxestay-ak.netlify.app"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Live Link
                        </Link>
                        <Link
                            to={"https://github.com/akweb69/LuxeStay"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            to={`/project-details/${1}`}
                        >
                            View Details
                        </Link>
                    </div>
                </motion.div>
                {/* card -02 */}
                <motion.div

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] relative overflow-hidden group"
                >
                    <img
                        src={img2}
                        alt="Visa Quest Website"
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">Visa Quest</h3>
                    <p className="text-xl font-semibold text-gray-300">Hassle-Free Visa Guidance</p>
                    <p className="text-gray-300 mb-4">Welcome to Visa Quest – your ultimate platform to explore, understand, and apply for visas worldwide.</p>

                    {/* Hover effect and buttons */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            to={"https://visa-quest.netlify.app"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Live Link
                        </Link>
                        <Link
                            to={"https://github.com/akweb69/visa-quest"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            to={`/project-details/${2}`}
                        >
                            View Details
                        </Link>
                    </div>
                </motion.div>
                {/* card-03 */}
                <motion.div

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] relative overflow-hidden group"
                >
                    <img
                        src="https://i.ibb.co/k4zNssw/Screenshot-9.png"
                        alt="Visa Quest Website"
                        referrerPolicy='no-referrer'
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">Lingo-Bingo</h3>
                    <p className="text-xl font-semibold text-gray-300">Fun & Easy Way to Learn Arabic Vocabulary</p>

                    <p className="text-gray-300 mb-4">Lingo Bingo is a fun and interactive language learning application designed to help users expand their vocabulary and improve communication skills in multiple languages. Learning a new language can be challenging, especially when it comes to retaining vocabulary, but Lingo Bingo makes the process engaging, effective, and enjoyable.</p>

                    {/* Hover effect and buttons */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            to={"https://lingo-bingo-ak.netlify.app"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Live Link
                        </Link>
                        <Link
                            to={"https://github.com/akweb69/lingo-bingo?tab=readme-ov-file"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            to={`/project-details/${3}`}
                        >
                            View Details
                        </Link>
                    </div>
                </motion.div>
                {/* card-04 */}
                <motion.div

                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] relative overflow-hidden group"
                >
                    <img
                        src="https://i.ibb.co/4Z88WVh/Screenshot-10.png"
                        alt="Visa Quest Website"
                        referrerPolicy='no-referrer'
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-xl font-semibold text-white mb-4">Gadget Heaven</h3>
                    <p className="text-xl font-semibold text-gray-300">Your Ultimate Tech Destination</p>
                    <p className="text-gray-300 mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>

                    {/* Hover effect and buttons */}
                    <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            to={"https://shiny-faloodeh-4f615f.netlify.app"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Live Link
                        </Link>
                        <Link
                            to={"https://github.com/akweb69/gadget-hunter?tab=readme-ov-file"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                        >
                            GitHub Repo
                        </Link>
                        <Link
                            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            to={`/project-details/${4}`}
                        >
                            View Details
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Projects;
