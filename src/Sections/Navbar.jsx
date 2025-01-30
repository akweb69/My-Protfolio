import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="w-full bg-[rgb(0,0,31)] sticky top-0 z-50 text-white">
            <div className="w-11/12 mx-auto  py-2 flex items-center justify-between">
                {/* Left Side - Name */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                    A.Kalam
                </motion.div>


                {/* Center - Nav Links */}
                <div className="hidden md:flex gap-8">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <Link
                            to="/"
                            className="hover:text-indigo-500 transition duration-200"
                        >
                            Home
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <Link
                            to="/about"
                            className="hover:text-indigo-500 transition duration-200"
                        >
                            About
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Link
                            to="/projects"
                            className="hover:text-indigo-500 transition duration-200"
                        >
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Link
                            to="/contact"
                            className="hover:text-indigo-500 transition duration-200"
                        >
                            Contact
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side - Download CV Button */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="hidden md:flex items-center gap-2 cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                >
                    <FaDownload />
                    <a href="https://drive.google.com/uc?export=download&id=19vOAcA2yfkFMQ4W8GvDjLCmJC-8Ye6W0" target="_blank" rel="noopener noreferrer">
                        Download CV
                    </a>
                </motion.div>

                {/* Mobile View - Hamburger Menu */}
                <div className="md:hidden flex items-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white"
                        >
                            <span className="block w-6 h-0.5 bg-white mb-2"></span>
                            <span className="block w-6 h-0.5 bg-white mb-2"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu - Display when isMobileMenuOpen is true */}
            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 py-4">
                    <Link
                        to="/"
                        className="text-white hover:text-indigo-500 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-indigo-500 transition duration-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="text-white hover:text-indigo-500 transition duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:text-indigo-500 transition duration-200"
                    >
                        Contact
                    </Link>
                    <a
                        href="/cv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-indigo-500 transition duration-200"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
