import { motion } from "framer-motion";
import { FaBook, FaCode, FaBullseye, FaLightbulb } from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[rgb(0,0,31)] w-11/12 mx-auto py-10 md:py-20 flex flex-col items-center justify-center px-6">
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-bold text-white mb-8"
            >
                About Me
            </motion.h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
                {/* Card 1: Hobbies */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
                        borderColor: "rgba(255, 215, 0, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] transition-all hover:border-yellow-400"
                >
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        whileTap={{ rotate: 0, scale: 0.9 }}
                    >
                        <FaBook className="text-yellow-400 text-5xl mb-4 transition-colors hover:text-yellow-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">Hobbies</h3>
                    <p className="text-gray-300 mt-2">
                        I enjoy reading religious books that provide wisdom and guidance for life.
                    </p>
                </motion.div>

                {/* Card 2: How I Got into Programming */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(30, 144, 255, 0.8)",
                        borderColor: "rgba(30, 144, 255, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] transition-all hover:border-blue-400"
                >
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        whileTap={{ rotate: 0, scale: 0.9 }}
                    >
                        <FaCode className="text-blue-400 text-5xl mb-4 transition-colors hover:text-blue-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">How I Got Into Programming</h3>
                    <p className="text-gray-300 mt-2">
                        My journey began with curiosity about building websites and solving problems with code.
                    </p>
                </motion.div>

                {/* Card 3: Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255, 69, 0, 0.8)",
                        borderColor: "rgba(255, 69, 0, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] transition-all hover:border-red-400"
                >
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        whileTap={{ rotate: 0, scale: 0.9 }}
                    >
                        <FaBullseye className="text-red-400 text-5xl mb-4 transition-colors hover:text-red-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">Goals</h3>
                    <p className="text-gray-300 mt-2">
                        My aim is to create impactful projects, continuously grow, and contribute to society.
                    </p>
                </motion.div>

                {/* Card 4: Creative Thinker */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(50, 205, 50, 0.8)",
                        borderColor: "rgba(50, 205, 50, 0.8)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[rgb(10,10,50)] shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-center border border-[rgb(30,30,60)] transition-all hover:border-green-400"
                >
                    <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        whileTap={{ rotate: 0, scale: 0.9 }}
                    >
                        <FaLightbulb className="text-green-400 text-5xl mb-4 transition-colors hover:text-green-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">Creative Thinker</h3>
                    <p className="text-gray-300 mt-2">
                        I enjoy brainstorming innovative ideas and turning them into real-world solutions.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;