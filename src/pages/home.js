import React, { Fragment } from "react";
import HomeAbout from "../components/homePage/HomeAbout";
import HomeIntro from "../components/homePage/HomeIntro";
import HomeProjects from "../components/homePage/HomeProjects";
import HomeContact from "../components/homePage/HomeContact";
import ProjectsModal from "../components/homeProjectComponents/ProjectsModal";
import HomeAddProjectsModal from "../components/homeProjectComponents/HomeAddProjectsModal";
import { useGlobalStateContext } from "../components/context/globalContext";
import HomeProjectsGenshin from "../components/homeProjectComponents/HomeProjectsGenshin";
import HomeSkills from "../components/homePage/HomeSkills";

const Home = () => {
    const { isModalActive } = useGlobalStateContext();
    return (
        <Fragment>
            <HomeIntro />
            <HomeAbout />
            <HomeProjects />
            <HomeSkills />

            {/* <HomeAddProjectsModal /> */}

            {isModalActive === "Genshin Wish Simulator" ? (
                <HomeProjectsGenshin />
            ) : isModalActive === "ADD_PROJECT" ? (
                <HomeAddProjectsModal />
            ) : (
                isModalActive && <ProjectsModal />
            )}
            <HomeContact />
        </Fragment>
    );
};

export default Home;
