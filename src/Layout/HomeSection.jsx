import About from "../Sections/About";
import ContactMe from "../Sections/ContactMe";
import Education from "../Sections/Education";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Testimonials from "../Sections/Testimonials";
import videobg from "../assets/videos/abouty.mp4";

const HomeSection = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="w-full min-h-screen relative">
                {/* Video Background */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover -z-50"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videobg} type="video/mp4" />
                </video>

                {/* Overlay for better visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                <About></About>
                <Skills></Skills>
                <Education></Education>
            </div>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <ContactMe></ContactMe>
        </div>
    );
};

export default HomeSection;