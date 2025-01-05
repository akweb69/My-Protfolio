import About from "../Sections/About";
import ContactMe from "../Sections/ContactMe";
import Education from "../Sections/Education";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";
import Testimonials from "../Sections/Testimonials";

const HomeSection = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Testimonials></Testimonials>
            <ContactMe></ContactMe>
        </div>
    );
};

export default HomeSection;