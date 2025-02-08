import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import imgbg from "../assets/videos/fgfgfg.gif";

const Footer = () => {
    return (
        <div
            className="py-8 min-h-[50vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${imgbg})` }}
        >
            <div className="container mx-auto text-center relative z-10">
                {/* Footer Title */}
                <motion.h2
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Connect with Me
                </motion.h2>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <motion.a
                        href="https://github.com/akweb69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaGithub size={30} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/akwebdev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaLinkedin size={30} />
                    </motion.a>
                    <motion.a
                        href="https://twitter.com/akwebdev69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaTwitter size={30} />
                    </motion.a>
                </div>

                {/* Newsletter Section */}
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-lg text-white mb-2">Subscribe to Our Newsletter</h3>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-md text-gray-800"
                        />
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-r-md hover:bg-purple-700">
                            Subscribe
                        </button>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className="text-gray-300 text-sm mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    &copy; 2025 ABU KALAM. All rights reserved.
                </motion.p>
            </div>
        </div>
    );
};

export default Footer;
