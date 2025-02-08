import About from "../Sections/About";
import ContactMe from "../Sections/ContactMe";
import Education from "../Sections/Education";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Testimonials from "../Sections/Testimonials";
import backgroundImage from "../assets/videos/ʙʟᴀᴄᴋ ɢᴏʟᴅ.gif";

const HomeSection = () => {
    return (
        <div>
            <Hero />
            <div
                className="w-full min-h-screen relative "
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",


                }}
            >
                {/* Overlay for better visibility */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
                <About />
                <Skills />
                <Education />
            </div>
            <Projects />
            <Testimonials />
            <ContactMe />
        </div>
    );
};

export default HomeSection;
