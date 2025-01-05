import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-[rgb(10,10,50)] py-8 mt-16">
            <div className="container mx-auto text-center">
                {/* Footer Title */}
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-4">Connect with Me</h2>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/akweb69" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/akwebdev/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://twitter.com/akwebdev69" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                        <FaTwitter size={30} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-300 text-sm">&copy; 2025 ABU KALAM. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
