import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/my.png"


const Hero = () => {
    return (
        <div className="min-h-screen py-10  bg-[rgb(0,0,31)] flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-6xl font-bold text-white"
                        >
                            Hi, I'm <span className="text-blue-500">Abu Kalam</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
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
                        <p className="text-gray-300 text-lg">
                            I specialize in creating stunning, responsive, and interactive websites using the latest technologies.
                        </p>
                        {/* social links */}
                        <div className="flex items-center justify-center  lg:justify-start gap-4">
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
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="flex items-center gap-2 cursor-pointer bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                            >
                                <FaDownload />
                                <a href="https://drive.google.com/uc?export=download&id=19vOAcA2yfkFMQ4W8GvDjLCmJC-8Ye6W0" target="_blank" rel="noopener noreferrer">
                                    Download CV
                                </a>
                            </motion.div>
                            <motion.a
                                href="/projects"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2.5 }}
                                className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
                            >
                                <FaFolderOpen className="mr-2" />
                                Projects
                            </motion.a>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            src={img1}
                            alt="Profile"
                            className="rounded-full shad"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
