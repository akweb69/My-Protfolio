import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import backgroundImage from "../assets/videos/bees and bombs.gif";
import Heading from '../Utils/Heading';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className="w-full py-10"
        >
            <Heading one={"Projects"} two={"Here are some latest projects I recently built"} />
            <div className="w-11/12 mx-auto space-y-10">
                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:grid md:grid-cols-2 h-full border rounded-xl bg-[rgba(0,0,0,0.4)] backdrop-blur-md border-indigo-900 overflow-hidden"
                >
                    {/* Left side image */}
                    <div className="w-full">
                        <img
                            className=' w-full h-full object-cover'
                            src="https://i.ibb.co/hxj73787/Screenshot-2025-01-30-070904.png"
                            alt="Thumbnail is not available"
                        />
                    </div>
                    {/* Right side details */}
                    <div className="w-full p-4 md:p-6  text-white">
                        <h1 className="text-2xl font-bold text-indigo-400">Project: UniGrants</h1>
                        <p className="text-lg font-semibold text-gray-300">Title: Scholarship Management Application</p>
                        <p className="mt-2 text-gray-400">UniGrants is an advanced scholarship discovery and application management platform that enables students to find and apply for scholarships seamlessly. With an intuitive user interface and powerful tools, UniGrants bridges the gap between students and their dreams.</p>

                        {/* Technologies */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-indigo-400">Technologies Used:</h2>
                            <ul className='flex flex-wrap gap-3 mt-2 text-xs'>
                                <li className='bg-orange-600 text-white rounded-lg px-3 py-1'>HTML</li>
                                <li className='bg-blue-600 text-white rounded-lg px-3 py-1'>CSS</li>
                                <li className='bg-yellow-500 text-black rounded-lg px-3 py-1'>JavaScript</li>
                                <li className='bg-cyan-500 text-black rounded-lg px-3 py-1'>React.js</li>
                                <li className='bg-teal-500 text-white rounded-lg px-3 py-1'>Tailwind CSS</li>
                                <li className='bg-red-500 text-white rounded-lg px-3 py-1'>Firebase</li>
                                <li className='bg-gray-700 text-white rounded-lg px-3 py-1'>Node.js</li>
                                <li className='bg-green-700 text-white rounded-lg px-3 py-1'>MongoDB</li>
                                <li className='bg-purple-500 text-white rounded-lg px-3 py-1'>Framer Motion</li>
                            </ul>
                        </div>

                        {/* Challenges */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-red-400">Challenges Faced:</h2>
                            <p className="mt-2 text-gray-400">Handling real-time database updates efficiently and ensuring smooth user authentication were major challenges. Implementing responsive UI for seamless experience across all devices was also tricky.</p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 lg:flex gap-3 space-y-3 lg:space-y-0">
                            <Link to="https://unigrants.netlify.app" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaExternalLinkAlt /> Live Demo
                            </Link>
                            <Link to="https://github.com/akweb69/Unigrants-Client-Side" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Client Repo
                            </Link>
                            <Link to="https://github.com/akweb69/Unigrants-Client-Side" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Server Repo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                {/* luxeStay */}
                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:grid md:grid-cols-2 h-full border rounded-xl bg-[rgba(0,0,0,0.4)] backdrop-blur-sm border-indigo-900 overflow-hidden "
                >
                    {/* left side */}
                    <div className="w-full p-6 text-white">
                        <h1 className="text-2xl font-bold text-indigo-400">Project: LuxeStay</h1>
                        <p className="text-lg font-semibold text-gray-300">Title: Hotel Booking Platform</p>
                        <p className="mt-2 text-gray-400">LuxeStay is a modern hotel booking platform designed to provide users with a seamless experience in finding and reserving hotels. With a user-friendly interface, secure transactions, and real-time availability tracking, LuxeStay makes hotel booking effortless.</p>

                        {/* Technologies */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-indigo-400">Technologies Used:</h2>
                            <ul className='flex flex-wrap gap-3 mt-2 text-xs'>
                                <li className='bg-orange-600 text-white rounded-lg px-3 py-1'>HTML</li>
                                <li className='bg-blue-600 text-white rounded-lg px-3 py-1'>CSS</li>
                                <li className='bg-yellow-500 text-black rounded-lg px-3 py-1'>JavaScript</li>
                                <li className='bg-cyan-500 text-black rounded-lg px-3 py-1'>React.js</li>
                                <li className='bg-teal-500 text-white rounded-lg px-3 py-1'>Tailwind CSS</li>
                                <li className='bg-red-500 text-white rounded-lg px-3 py-1'>Firebase</li>
                                <li className='bg-gray-700 text-white rounded-lg px-3 py-1'>Node.js</li>
                                <li className='bg-green-700 text-white rounded-lg px-3 py-1'>MongoDB</li>
                                <li className='bg-purple-500 text-white rounded-lg px-3 py-1'>Framer Motion</li>
                            </ul>
                        </div>

                        {/* Challenges */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-red-400">Challenges Faced:</h2>
                            <p className="mt-2 text-gray-400">Ensuring real-time booking updates and preventing double bookings were major challenges. Optimizing API performance for seamless user experience across all devices required advanced caching techniques.</p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 lg:flex gap-3 space-y-3 lg:space-y-0">
                            <Link to="https://luxestay-ak.netlify.app" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaExternalLinkAlt /> Live Demo
                            </Link>
                            <Link to="https://github.com/akweb69/LuxeStay" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Client Repo
                            </Link>
                            <Link to="https://github.com/akweb69/LuxeStay_Server_Side" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Server Repo
                            </Link>
                        </div>
                    </div>
                    {/* Right side side image */}
                    <div className="w-full">
                        <img
                            className=' w-full h-full object-cover'
                            src="https://i.ibb.co/NtbH4mt/2149714407.jpg"
                            alt="Thumbnail is not available"
                        />
                    </div>

                </motion.div>
                {/* card---visaQuest */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:grid md:grid-cols-2 h-full border rounded-xl bg-[rgba(0,0,0,0.4)] backdrop-blur-md border-indigo-900 overflow-hidden"
                >
                    {/* Left side image */}
                    <div className="w-full">
                        <img
                            className=' w-full h-full object-cover'
                            src="https://i.ibb.co/99RgJ6m/assssssss.jpg"
                            alt="VisaQuest Thumbnail"
                        />
                    </div>
                    {/* Right side details */}
                    <div className="w-full p-4 md:p-6  text-white">
                        <h1 className="text-2xl font-bold text-indigo-400">Project: VisaQuest</h1>
                        <p className="text-lg font-semibold text-gray-300">Title: Visa & Immigration Guide</p>
                        <p className="mt-2 text-gray-400">
                            VisaQuest is an advanced visa and immigration assistance platform that helps users
                            find visa requirements, application processes, and expert guidance for different countries.
                            The platform provides a seamless experience with an intuitive UI and rich resources.
                        </p>

                        {/* Technologies */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-indigo-400">Technologies Used:</h2>
                            <ul className='flex flex-wrap gap-3 mt-2 text-xs'>
                                <li className='bg-orange-600 text-white rounded-lg px-3 py-1'>HTML</li>
                                <li className='bg-blue-600 text-white rounded-lg px-3 py-1'>CSS</li>
                                <li className='bg-yellow-500 text-black rounded-lg px-3 py-1'>JavaScript</li>
                                <li className='bg-cyan-500 text-black rounded-lg px-3 py-1'>React.js</li>
                                <li className='bg-teal-500 text-white rounded-lg px-3 py-1'>Tailwind CSS</li>
                                <li className='bg-red-500 text-white rounded-lg px-3 py-1'>Firebase</li>
                                <li className='bg-gray-700 text-white rounded-lg px-3 py-1'>Node.js</li>
                                <li className='bg-green-700 text-white rounded-lg px-3 py-1'>MongoDB</li>
                                <li className='bg-purple-500 text-white rounded-lg px-3 py-1'>Framer Motion</li>
                            </ul>
                        </div>

                        {/* Challenges */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-red-400">Challenges Faced:</h2>
                            <p className="mt-2 text-gray-400">
                                Gathering up-to-date visa requirements from multiple sources was a significant challenge.
                                Additionally, implementing a user-friendly interface for complex visa application processes
                                required careful design and backend optimization.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 lg:flex gap-3 space-y-3 lg:space-y-0">
                            <Link to="https://visa-quest.netlify.app" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaExternalLinkAlt /> Live Demo
                            </Link>
                            <Link to="https://github.com/akweb69/VisaQuest-Updated" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Client Repo
                            </Link>
                            <Link to="https://github.com/akweb69/VisaQuest-Server" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Server Repo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                {/* card---Gadget Havean */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:grid md:grid-cols-2 h-full border rounded-xl bg-[rgba(0,0,0,0.4)] backdrop-blur-sm border-indigo-900 overflow-hidden"
                >
                    {/* Left side */}
                    <div className="w-full p-6 text-white">
                        <h1 className="text-2xl font-bold text-indigo-400">Project: Gadget Heaven</h1>
                        <p className="text-lg font-semibold text-gray-300">Title: Ultimate Tech Marketplace</p>
                        <p className="mt-2 text-gray-400">
                            Gadget Heaven is an advanced e-commerce platform where users can explore and purchase the latest gadgets.
                            It offers a seamless shopping experience with detailed product comparisons, secure transactions, and
                            real-time inventory tracking.
                        </p>

                        {/* Technologies */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-indigo-400">Technologies Used:</h2>
                            <ul className='flex flex-wrap gap-3 mt-2 text-xs'>
                                <li className='bg-orange-600 text-white rounded-lg px-3 py-1'>HTML</li>
                                <li className='bg-blue-600 text-white rounded-lg px-3 py-1'>CSS</li>
                                <li className='bg-yellow-500 text-black rounded-lg px-3 py-1'>JavaScript</li>
                                <li className='bg-cyan-500 text-black rounded-lg px-3 py-1'>React.js</li>
                                <li className='bg-teal-500 text-white rounded-lg px-3 py-1'>Tailwind CSS</li>
                                <li className='bg-red-500 text-white rounded-lg px-3 py-1'>Firebase</li>
                                <li className='bg-gray-700 text-white rounded-lg px-3 py-1'>Node.js</li>
                                <li className='bg-green-700 text-white rounded-lg px-3 py-1'>MongoDB</li>
                                <li className='bg-purple-500 text-white rounded-lg px-3 py-1'>Framer Motion</li>
                            </ul>
                        </div>

                        {/* Challenges */}
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-red-400">Challenges Faced:</h2>
                            <p className="mt-2 text-gray-400">
                                Managing real-time inventory updates and handling high-traffic loads during flash sales were
                                major challenges. Implementing an AI-driven recommendation system for personalized shopping
                                also required extensive optimization.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-5 lg:flex gap-3 space-y-3 lg:space-y-0">
                            <Link to="https://shiny-faloodeh-4f615f.netlify.app" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaExternalLinkAlt /> Live Demo
                            </Link>
                            <Link to="https://github.com/akweb69/gadget-hunter" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Client Repo
                            </Link>
                            <Link to="https://github.com/akweb69/gadget-hunter" className="bg-gray-700 hover:bg-gray-800 flex items-center gap-2 py-2 px-5 rounded-lg text-white font-semibold transition-all">
                                <FaGithub /> Server Repo
                            </Link>
                        </div>
                    </div>
                    {/* Right side image */}
                    <div className="w-full">
                        <img
                            className=' w-full h-full object-cover'
                            src="https://i.ibb.co/jh2Pmj1/Screenshot-10.png"
                            alt="Gadget Heaven Thumbnail"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Projects;