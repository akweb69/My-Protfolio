import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFolderOpen, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/my.png";
import videobg from "../assets/videos/main1.mp4";

const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
            >
                <source src={videobg} type="video/mp4" />
            </video>

            {/* Overlay for better visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-1"></div>

            {/* Main Content */}
            <div className="relative w-full max-w-lg z-10 flex flex-col items-center">
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="relative"
                >
                    <motion.img
                        src={img1}
                        alt="Profile"
                        className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-lg"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mt-6"
                >
                    Hi, I'm <span className="text-blue-500">Abu Kalam</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="text-xl md:text-2xl font-medium text-gray-300 mt-2"
                >
                    <Typewriter
                        words={["MERN Stack Developer", "Full-Stack Web Developer", "Interactive Designer", "EEE Engineer"]}
                        loop={0}
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
                    className="text-gray-300 text-lg mt-4"
                >
                    I specialize in building stunning, responsive, and interactive web experiences.
                </motion.p>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="flex gap-4 mt-6"
                >
                    {[{
                        icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100012366829035", color: "text-blue-600"
                    }, {
                        icon: <FaTwitter />, url: "https://twitter.com", color: "text-blue-400"
                    }, {
                        icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abukalam1", color: "text-blue-700"
                    }, {
                        icon: <FaGithub />, url: "https://github.com/akweb69", color: "text-gray-800"
                    }].map(({ icon, url, color }, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                            <Link to={url} target="_blank" rel="noopener noreferrer" className={`${color} text-2xl`}>
                                {icon}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="flex flex-wrap justify-center gap-4 mt-6"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://drive.google.com/uc?export=download&id=18rtaXkX9g4ZpWcAbA36uEhwa3z5sasZm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
                    >
                        <FaDownload /> Download CV
                    </motion.a>
                    <motion.a
                        href="/projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
                    >
                        <FaFolderOpen className="mr-2" /> Projects
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;