import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { FaLink, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();

    return (
        <div className="w-full min-h-screen py-10 md:py-20 bg-[rgb(10,10,50)] text-white">

            <div className="w-11/12 mx-auto">
                {
                    id === "0" && <div className="border border-green-900 bg-[rgb(10,50,10)] rounded-lg shadow-lg">
                        <motion.div
                            initial={{ y: 100, scale: 0, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.33 }}
                            className="w-full overflow-hidden rounded-t-lg"
                        >
                            <img className="w-full object-cover"
                                src="https://i.ibb.co/hxj73787/Screenshot-2025-01-30-070904.png"
                                alt="UniGrants Project"
                            />
                        </motion.div>
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4 text-gradient-to-r from-green-500 via-blue-500 to-teal-500">
                                Project Name: UniGrants
                            </h1>
                            <p className="mb-4 text-lg">
                                UniGrants is a comprehensive scholarship management system that allows students to search for suitable universities and scholarships, track their applications, and apply seamlessly through the platform.
                            </p>

                            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Scholarship Search: Advanced filtering for finding the right scholarship opportunities.</li>
                                <li>Application Tracking: Users can track their submitted applications in real-time.</li>
                                <li>Responsive Layout: Fully optimized for all screen sizes.</li>
                                <li>Secure User Authentication: Firebase authentication for secure access.</li>
                                <li>Interactive Dashboard: A personalized student dashboard for managing applications and deadlines.</li>
                                <li>Admin & Moderator Roles: Admins can approve/reject applications and manage content.</li>
                                <li>Dark Mode Support: Enhanced UI experience with dark/light mode options.</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Built With:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Frontend: React.js, Tailwind CSS, Material UI, Framer Motion</li>
                                <li>Backend: Node.js, Express.js</li>
                                <li>Database: MongoDB</li>
                                <li>Authentication: Firebase Authentication</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Additional Features:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>SEO Optimized: Helps students find relevant scholarships easily.</li>
                                <li>Real-time Notifications: Get alerts on application status updates.</li>
                                <li>Multi-User Role System: Different roles for students, admins, and moderators.</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Contact:</h2>
                            <ul className="list-none pl-6 mb-4">
                                <li className="flex items-center gap-2"><FaPhone /> +880 1768037870</li>
                                <li className="flex items-center gap-2"><FaEnvelope /> akwebdev69@gmail.com</li>
                            </ul>

                            <p className="mb-6">UniGrants – Empowering students with scholarships and opportunities!</p>

                            <div className="flex gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition duration-200"
                                >
                                    <FaLink /> <a href="https://unigrants.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition duration-200"
                                >
                                    <FaGithub /> <a href="https://github.com/akweb69/Unigrants-Client-Side" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }

                {
                    id === "1" && <div className="border border-indigo-900 bg-[rgb(20,20,70)] rounded-lg shadow-lg">
                        <motion.div
                            initial={{ y: 100, scale: 0, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.33 }}
                            className="w-full overflow-hidden rounded-t-lg"
                        >
                            <img className="w-full object-cover " src="https://camo.githubusercontent.com/f2abbee040e8add8c13e4f92c252c706f88564df9e1bee4b7b37827fb51b2fe7/68747470733a2f2f692e6962622e636f2e636f6d2f577072704654782f53637265656e73686f742d323032342d31322d32362d3137323335382e706e67" alt="LuxeStay Project" />
                        </motion.div>
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4 text-gradient-to-r from-purple-500 via-pink-500 to-red-500">Project Name: LuxeStay</h1>
                            <p className="mb-4 text-lg">LuxeStay is a premium hotel booking platform that redefines luxury and comfort. With a seamless user interface and cutting-edge technology, LuxeStay provides an elegant solution for booking world-class accommodations.</p>

                            <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Modern Design: A sleek and user-friendly interface for a smooth booking experience.</li>
                                <li>Responsive Layout: Fully responsive across all devices, ensuring a consistent experience.</li>
                                <li>Dynamic Search: Real-time filtering and searching for hotels based on user preferences.</li>
                                <li>Secure Booking: End-to-end encryption for safe and secure transactions.</li>
                                <li>Interactive Animations: Engaging animations and transitions powered by modern web technologies.</li>
                                <li>Dark Mode Support: Enhanced accessibility with a stylish dark theme.</li>
                                <li>How It Works Section: A dedicated section to guide users through the platform's functionality.</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Built With:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS, DaisyUI, Framer Motion</li>
                                <li>Backend: Node.js, Express.js</li>
                                <li>Database: MongoDB</li>
                                <li>Authentication: Firebase Authentication</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Additional Features:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>SEO Optimized: Enhanced search engine visibility to attract more users.</li>
                                <li>Lazy Loading: Improves performance by loading images and content as needed.</li>
                                <li>Custom Animations: Eye-catching transitions to keep users engaged.</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-2">Contact:</h2>
                            <ul className="list-none pl-6 mb-4">
                                <li className="flex items-center gap-2"><FaPhone /> +880 1768037870</li>
                                <li className="flex items-center gap-2"><FaEnvelope /> akwebdev69@gmail.com</li>
                            </ul>

                            <p className="mb-6">Thank you for choosing LuxeStay – where luxury meets convenience!</p>

                            <div className="flex gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition duration-200"
                                >
                                    <FaLink /> <a href="https://luxestay-ak.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition duration-200"
                                >
                                    <FaGithub /> <a href="https://github.com/akweb69/LuxeStay" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }
                {
                    id === "2" && <div className="w-full py-10 md:py-20">
                        <div className="w-11/12 mx-auto bg-white p-6 rounded-lg shadow-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.33 }}
                                className="w-full mb-6"
                            >
                                <img
                                    className="w-full h-80 object-cover rounded-lg"
                                    src="https://i.ibb.co/Wg9RwCg/visa.png"
                                    alt="VisaQuest Features"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>

                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                                VisaQuest: Seamless Visa Application Assistance
                            </h1>
                            <p className="text-lg mb-6 text-gray-800">
                                VisaQuest is your go-to platform for hassle-free visa applications. Explore how our platform simplifies the process and ensures you get the right assistance every step of the way.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                                <li>Personalized Visa Guidance: Receive tailored guidance based on your country, destination, and visa type.</li>
                                <li>Step-by-Step Application Tracker: Stay on top of your application status with real-time updates.</li>
                                <li>Expert Consultation: Access professional consultations for complex visa requirements.</li>
                                <li>Document Checklist: Comprehensive checklists to ensure you don’t miss any important paperwork.</li>
                                <li>Easy Payment Integration: Secure and simple payment gateway for service fees.</li>
                                <li>Live Chat Support: Instant support via live chat to resolve queries on the go.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Technologies Used:</h2>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Frontend: React.js, Tailwind CSS, DaisyUI for a beautiful user interface.</li>
                                <li>Backend: Node.js, Express.js for managing visa applications.</li>
                                <li>Database: MongoDB for storing application and user details.</li>
                                <li>Authentication: Firebase Authentication for secure and easy login.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Additional Features:</h2>
                            <ul className="list-disc pl-6 mb-6 text-gray-800">
                                <li>Multi-Country Support: VisaQuest supports applications for multiple countries worldwide.</li>
                                <li>Instant Notifications: Receive real-time updates about your visa application status.</li>
                                <li>Mobile Optimized: Fully responsive and optimized for mobile devices.</li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaLink />
                                    <a href="https://visa-quest.netlify.app" target="_blank" rel="noopener noreferrer">
                                        Live Link
                                    </a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaGithub />
                                    <a href="https://github.com/akweb69/visa-quest" target="_blank" rel="noopener noreferrer">
                                        GitHub Repo
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }
                {
                    id === "3" && <div className="w-full py-10 md:py-20">
                        <div className="w-11/12 mx-auto bg-white p-6 rounded-lg shadow-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.33 }}
                                className="w-full mb-6"
                            >
                                <img
                                    className="w-full h-80 object-cover rounded-lg"
                                    src="https://i.ibb.co/k4zNssw/Screenshot-9.png"
                                    alt="Lingo Bingo Features"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>

                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                                Lingo Bingo: Fun & Interactive Language Learning Game
                            </h1>
                            <p className="text-lg mb-6 text-gray-800">
                                Lingo Bingo makes learning languages a fun and engaging experience. Play bingo with words in various languages, while improving your vocabulary and language skills!
                            </p>

                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                                <li>Interactive Bingo Gameplay: Engage with language vocabulary through a game format.</li>
                                <li>Multiple Languages: Support for various languages, including English, Spanish, French, and more.</li>
                                <li>Real-Time Scoring: Keep track of your progress and compete with friends.</li>
                                <li>Customizable Cards: Personalize bingo cards with your chosen words and languages.</li>
                                <li>Learning Mode: A special mode to help users learn words before starting the game.</li>
                                <li>Sound Effects and Animations: Fun sounds and animations to make the game more enjoyable.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Technologies Used:</h2>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Frontend: React.js, Tailwind CSS for a fast and beautiful UI.</li>
                                <li>Backend: Node.js for managing game data and user sessions.</li>
                                <li>Real-Time Gameplay: WebSockets for real-time interactions and score updates.</li>
                                <li>Database: MongoDB to store game history, user data, and vocabulary lists.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Additional Features:</h2>
                            <ul className="list-disc pl-6 mb-6 text-gray-800">
                                <li>Multiplayer Mode: Play with friends or random players online.</li>
                                <li>Language-Specific Challenges: Special challenges to test your vocabulary knowledge.</li>
                                <li>Leaderboard: A global leaderboard to show the best players.</li>
                                <li>Mobile Optimized: Fully responsive for a seamless experience across all devices.</li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaLink />
                                    <a href="https://lingo-bingo-ak.netlify.app" target="_blank" rel="noopener noreferrer">
                                        Live Link
                                    </a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaGithub />
                                    <a href="https://github.com/akweb69/lingo-bingo?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                                        GitHub Repo
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }
                {
                    id === "4" && <div className="w-full py-10 md:py-20">
                        <div className="w-11/12 mx-auto bg-white p-6 rounded-lg shadow-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.33 }}
                                className="w-full mb-6"
                            >
                                <img
                                    className="w-full h-80 object-cover rounded-lg"
                                    src="https://i.ibb.co/4Z88WVh/Screenshot-10.png"
                                    alt="Gadget Heaven Features"
                                />
                            </motion.div>

                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                                Gadget Heaven: Your Ultimate Gadget Marketplace
                            </h1>
                            <p className="text-lg mb-6 text-gray-800">
                                Gadget Heaven offers the best gadgets for tech enthusiasts, from smartphones to smart home devices. With a seamless shopping experience, Gadget Heaven provides the latest technology at your fingertips.
                            </p>

                            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
                            <ul className="list-disc pl-6 space-y-3 text-gray-800">
                                <li>Product Variety: A wide range of gadgets, including electronics, home automation, and personal devices.</li>
                                <li>User Reviews: See real user reviews to help make informed decisions before purchasing.</li>
                                <li>Seamless Checkout: Easy and secure checkout system with multiple payment options.</li>
                                <li>Advanced Search: Find products by category, price, rating, and more.</li>
                                <li>Interactive User Interface: A modern and dynamic UI with smooth animations and transitions.</li>
                                <li>Dark Mode: A sleek dark theme to enhance user experience.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Technologies Used:</h2>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Frontend: React.js, Tailwind CSS, DaisyUI, Framer Motion for interactive UI.</li>
                                <li>Backend: Node.js, Express.js for managing user data and transactions.</li>
                                <li>Database: MongoDB to store product data, reviews, and orders.</li>
                                <li>Authentication: Firebase Authentication for secure login and user management.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Additional Features:</h2>
                            <ul className="list-disc pl-6 mb-6 text-gray-800">
                                <li>Product Wishlist: Save your favorite products for later.</li>
                                <li>Order Tracking: Track your orders in real time from purchase to delivery.</li>
                                <li>Mobile Optimized: Fully responsive design for mobile and tablet users.</li>
                                <li>SEO Optimized: Improved search engine visibility to attract more customers.</li>
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaLink />
                                    <a href="https://gadget-heaven.netlify.app" target="_blank" rel="noopener noreferrer">
                                        Live Link
                                    </a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition duration-200 w-full sm:w-auto"
                                >
                                    <FaGithub />
                                    <a href="https://github.com/akweb69/gadget-hunter?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                                        GitHub Repo
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }



            </div>
        </div>
    );
};

export default ProjectDetails;
