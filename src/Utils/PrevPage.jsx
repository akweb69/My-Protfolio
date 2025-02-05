import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaCss3Alt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import videoBg from "../assets/videos/7670836-uhd_3840_2160_30fps.mp4";

const skills = [
    { icon: <FaReact className='text-blue-400' />, name: "React.js" },
    { icon: <FaNodeJs className='text-green-500' />, name: "Node.js" },
    { icon: <FaDatabase className='text-yellow-500' />, name: "MongoDB" },
    { icon: <FaJs className='text-yellow-300' />, name: "JavaScript" },
    { icon: <FaCss3Alt className='text-blue-500' />, name: "CSS3" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, ease: [0.42, 0, 0.58, 1] } }
};

const childVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const profileVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

const PrevPage = () => {
    return (
        <motion.div
            initial={{ scale: 1, y: 0 }}
            animate={{ scale: 5, }}
            transition={{ duration: 3, delay: 5 }}
            className="relative w-full h-screen flex justify-center items-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src={videoBg} type="video/mp4" />
            </video>

            {/* Content */}
            <motion.div
                className="w-full max-w-4xl flex flex-col space-y-6 justify-center items-center text-center text-white backdrop-blur-md bg-black/40 p-6 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Profile Image */}
                <motion.div
                    variants={profileVariants}
                    className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full shadow-2xl border-4 border-white overflow-hidden"
                >
                    <img src="https://i.ibb.co/BHVKrJL6/kalamcrop.jpg" className="w-full h-full object-cover" alt="profile" />
                </motion.div>

                {/* Name with Gradient */}
                <motion.h1
                    variants={childVariants}
                    className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-teal-400 text-transparent bg-clip-text drop-shadow-lg"
                >
                    Abu Kalam
                </motion.h1>

                {/* Designation */}
                <motion.div
                    variants={childVariants}
                    className="text-lg sm:text-2xl font-medium"
                >
                    <Typewriter
                        words={["MERN Stack Developer", "Full-Stack Web Developer", "Interactive Designer", "EEE ~ Engineer"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </motion.div>

                {/* Skills Section */}
                <motion.div variants={containerVariants} className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={childVariants}
                            className="flex flex-col items-center p-2 sm:p-3 bg-white bg-opacity-10 rounded-xl shadow-lg hover:scale-110 transition-transform"
                        >
                            <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Social Links */}
                <motion.div variants={containerVariants} className="flex space-x-4 sm:space-x-6 mt-6">
                    {[{ icon: <FaGithub />, link: "https://github.com/akweb69" },
                    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abukalam1" },
                    { icon: <FaFacebook />, link: "https://facebook.com" }]
                        .map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={childVariants}
                                className="text-2xl sm:text-3xl hover:text-gray-300 transition-transform transform hover:scale-125"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PrevPage;