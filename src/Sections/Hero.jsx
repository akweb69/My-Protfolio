import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/my.png";

const Hero = () => {
    return (
        <div className="min-h-screen py-10 bg-[rgb(0,0,31)] flex items-center justify-center overflow-hidden">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold text-white"
                        >
                            Hi, I'm{" "}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="text-blue-500"
                            >
                                Abu Kalam
                            </motion.span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="text-2xl md:text-3xl font-medium text-gray-300"
                        >
                            <Typewriter
                                words={[
                                    "MERN Stack Developer",
                                    "Full-Stack Web Developer",
                                    "Interactive Designer",
                                    "Electrical And Electronic Engineer",
                                ]}
                                loop={0} // Infinite loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.7 }}
                            className="text-gray-300 text-lg"
                        >
                            I specialize in creating stunning, responsive, and interactive websites using the latest technologies.
                        </motion.p>
                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="flex items-center justify-center lg:justify-start gap-4"
                        >
                            {/* Facebook */}
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                <Link to="https://www.facebook.com/profile.php?id=100012366829035" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
                                    <FaFacebook />
                                </Link>
                            </motion.div>

                            {/* Twitter */}
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
                                    <FaTwitter />
                                </Link>
                            </motion.div>

                            {/* LinkedIn */}
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                <Link to="https://www.linkedin.com/in/abukalam1" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl">
                                    <FaLinkedin />
                                </Link>
                            </motion.div>

                            {/* GitHub */}
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                <Link to="https://github.com/akweb69" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
                                    <FaGithub />
                                </Link>
                            </motion.div>
                        </motion.div>
                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                            >
                                <FaDownload />
                                <a href="https://drive.google.com/uc?export=download&id=19vOAcA2yfkFMQ4W8GvDjLCmJC-8Ye6W0" target="_blank" rel="noopener noreferrer">
                                    Download CV
                                </a>
                            </motion.div>
                            <motion.a
                                href="/projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
                            >
                                <FaFolderOpen className="mr-2" />
                                Projects
                            </motion.a>
                        </motion.div>
                    </div>
                    {/* Right Column */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="relative"
                        >
                            <motion.img
                                src={img1}
                                alt="Profile"
                                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-blue-500 shadow-lg"
                            />
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="absolute -bottom-4 -right-4 bg-blue-500 text-white rounded-full p-3 shadow-lg"
                            >
                                <FaGithub className="text-2xl" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;