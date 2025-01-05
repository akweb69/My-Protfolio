import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home";
import HomeSection from "../Layout/HomeSection";
import ProjectDetails from "../Sections/ProjectDetails";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import ContactMe from "../Sections/ContactMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <HomeSection></HomeSection>
            },
            {
                path: "/project-details/:id",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/about",
                element: <About></About>
            }
            ,
            {
                path: "/projects",
                element: <Projects></Projects>
            }
            ,
            {
                path: "/contact",
                element: <ContactMe></ContactMe>
            }
        ]
    }
])

export default router;