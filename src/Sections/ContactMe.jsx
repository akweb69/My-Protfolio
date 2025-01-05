import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div className="bg-[rgb(0,0,31)] py-10 md:py-20 px-6 flex flex-col items-center">
            {/* Title with Gradient Text */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-10"
            >
                Get in Touch
            </motion.h2>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 mx-auto">
                {/* Left Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col bg-[rgb(10,10,50)] p-8 rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6">Contact Form</h3>
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-[rgb(30,30,60)] text-white p-3 rounded-md mb-4 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-[rgb(30,30,60)] text-white p-3 rounded-md mb-4 w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="bg-[rgb(30,30,60)] text-white p-3 rounded-md mb-4 w-full h-32"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-md hover:bg-gradient-to-l mt-4"
                        >
                            Send Message
                        </button>
                    </div>
                </motion.div>

                {/* Right Column: Get in Touch Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col bg-[rgb(10,10,50)] p-8 rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-blue-500 text-xl mr-3" />
                        <span className="text-white">Joypurhat , Dhaka , Bangladesh</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-blue-500 text-xl mr-3" />
                        <span className="text-white">akwebdev69.com</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-blue-500 text-xl mr-3" />
                        <span className="text-white">+880 1768037870</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaWhatsapp className="text-green-500 text-xl mr-3" />
                        <span className="text-white">+880 1768037870</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactMe;
