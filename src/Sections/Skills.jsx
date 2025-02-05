import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiDaisyui, SiFirebase, SiMongodb, SiExpress, SiNpm } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500", proficiency: "95%" },
    { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500", proficiency: "90%" },
    { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500", proficiency: "85%" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-500", proficiency: "90%" },
    { icon: <SiDaisyui />, name: "DaisyUI", color: "text-purple-500", proficiency: "80%" },
    { icon: <FaReact />, name: "React.js", color: "text-blue-400", proficiency: "85%" },
    { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500", proficiency: "80%" },
    { icon: <SiExpress />, name: "Express.js", color: "text-gray-500", proficiency: "75%" },
    { icon: <TfiEmail />, name: "EmailJS", color: "text-pink-500", proficiency: "70%" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "text-indigo-500", proficiency: "85%" },
    { icon: <SiNpm />, name: "NPM", color: "text-red-500", proficiency: "80%" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600", proficiency: "80%" },
    { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-400", proficiency: "75%" },
    { icon: <FaGithub />, name: "GitHub", color: "text-gray-700", proficiency: "85%" },
    { icon: <FaGitAlt />, name: "Git", color: "text-orange-600", proficiency: "80%" },
];

const Skills = () => {
    return (
        <div className=" py-10 md:py-20 flex flex-col items-center justify-center w-11/12 mx-auto">
            {/* Title and Subtitle */}
            <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-lg text-gray-300 mb-10">Explore the expertise I bring to the table</p>

            {/* Infinite Slider Section */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 min-w-[120px] h-[140px] shadow-lg"
                        >
                            <div className={`${skill.color} text-3xl mb-2`}>{skill.icon}</div>
                            <h3 className="text-sm text-white font-semibold">{skill.name}</h3>
                            <p className="text-xs text-gray-300">{skill.proficiency}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
