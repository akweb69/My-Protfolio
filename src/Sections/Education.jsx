import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiNpm, SiDaisyui } from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "ReactJS", icon: <FaReact />, color: "text-blue-400" },
    { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "DaisyUI", icon: <SiDaisyui />, color: "text-pink-400" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "ExpressJS", icon: <SiExpress />, color: "text-gray-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-500" },
    { name: "NPM", icon: <SiNpm />, color: "text-red-500" },
    { name: "Database", icon: <FaDatabase />, color: "text-green-400" },
];

const Education = () => {
    return (
        <div className=" py-10   px-6 flex flex-col items-center">
            {/* Title and Subtitle */}
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <p className="text-lg text-gray-300 text-center">
                A glimpse into my academic journey and technical expertise.
            </p>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-11/12 mx-auto">
                {/* Left Column: Details */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white f"
                >
                    <h3 className="text-3xl  md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent w-fit bg-clip-text py-4 ">
                        Currently Studying
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I am a <span className="text-blue-400 font-medium">4th-year student</span> in the{" "}
                        <span className="text-purple-400 font-medium">EEE Department</span> at{" "}
                        <span className="text-blue-400 font-medium">
                            Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU)
                        </span>. My academic focus is on mastering electrical engineering concepts while improving my programming skills.
                    </p>
                </motion.div>

                {/* Right Column: Circular Animation */}
                <div className="relative flex items-center justify-center w-full h-[350px] overflow-hidden">
                    {/* Center Name */}
                    <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                        <p className="text-white font-bold text-lg text-center">ABU KALAM</p>
                    </div>

                    {/* Rotating Circle */}
                    <div className="circle-animation  h-full  rounded-full relative">
                        {skills.map((skill, index) => {
                            const angle = (index / skills.length) * 2 * Math.PI; // Calculate angle for circular placement
                            const radius = 130; // Radius of the circle
                            const x = radius * Math.cos(angle);
                            const y = radius * Math.sin(angle);

                            return (
                                <motion.div
                                    key={skill.name}
                                    className={`absolute flex flex-col items-center justify-center w-16 h-16 rounded-full bg-[rgb(30,30,60)] shadow-lg ${skill.color}`}
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                                >
                                    <div className="neon-effect transform-origin-center">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs mt-1 text-white">{skill.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
