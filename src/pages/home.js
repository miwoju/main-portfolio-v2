import React, { Fragment } from "react";
import HomeAbout from "../components/homePage/HomeAbout";
import HomeIntro from "../components/homePage/HomeIntro";
import HomeProjects from "../components/homePage/HomeProjects";
import HomeContact from "../components/homePage/HomeContact";

const home = () => {
    return (
        <Fragment>
            <HomeIntro />
            <HomeAbout />
            <HomeProjects />
            <HomeContact />
        </Fragment>
    );
};

export default home;
