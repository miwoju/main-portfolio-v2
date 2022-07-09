import React, { Fragment } from "react";
import HomeAbout from "../components/homePage/HomeAbout";
import HomeIntro from "../components/homePage/HomeIntro";
import HomeProjects from "../components/homePage/HomeProjects";
import HomeContact from "../components/homePage/HomeContact";
import HomeProjectsDetailed from "../components/homeProjectComponents/HomeProjectsDetailed";
import { useGlobalStateContext } from "../components/context/globalContext";
import HomeProjectsGenshin from "../components/homeProjectComponents/HomeProjectsGenshin";

const Home = () => {
    const { isModalActive } = useGlobalStateContext();
    return (
        <Fragment>
            <HomeIntro />
            <HomeAbout />
            <HomeProjects />
            {isModalActive === "Genshin Wish Simulator" && (
                <HomeProjectsGenshin />
            )}
            <HomeContact />
        </Fragment>
    );
};

export default Home;
