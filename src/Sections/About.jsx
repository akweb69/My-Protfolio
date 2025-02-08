import { motion } from "framer-motion";
import profileImage from "../assets/images/my.png";

const About = () => {
    return (
        <div className="w-full py-20 flex items-center justify-center text-white ">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Image with 3D Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full"
                        style={{
                            perspective: "1000px",
                        }}
                    >
                        <img
                            src={profileImage}
                            alt="About Me"
                            className="w-full max-h-[400px] object-scale-down md:border  rounded-xl shadow-2xl border-b-2 border-indigo-500"
                            style={{
                                transformStyle: "preserve-3d",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                        {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 blur-lg"></div> */}
                    </motion.div>
                </motion.div>

                {/* Right: Content with Indigo Theme */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left space-y-6"
                >
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        I am{" "}
                        <span className="text-yellow-400 font-semibold">
                            Abu Kalam
                        </span>
                        , a passionate full-stack web developer with expertise
                        in React, Tailwind CSS, Node.js, Express.js, and
                        MongoDB. I love creating innovative and interactive web
                        applications.
                    </p>
                    <p className="text-lg text-gray-200">
                        I constantly explore new technologies like Next.js and
                        Redux to enhance my skills. My goal is to build
                        impactful projects that provide real-world solutions.
                    </p>
                    <p className="text-lg text-gray-200">
                        Besides coding, I enjoy reading Islamic books, engaging
                        in discussions about technology, and continuously
                        learning to stay ahead in the tech world.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
