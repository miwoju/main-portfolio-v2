import React, { useState } from "react";
import { motion } from "framer-motion";

//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";
import genshinImg1 from "../../assets/images/genshin-img1.png";
import HomeProjectsDetailed from "../homeProjectComponents/HomeProjectsDetailed";
import {
    useGlobalStateContext,
    useGlobalDispatchContext,
} from "../context/globalContext";
import { device } from "../../util/device";

const StyledHomeProjects = styled.section`
    padding: 100px;
    background-color: #e5eaf4;
`;

const ProjectsContainer = styled.div`
    /* position: relative; */
    background-color: #fff;
    height: 100%;
    width: 100%;
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 90px 1fr;
    border-radius: 25px;
    box-shadow: -1px -1px 3px 0px rgba(0, 0, 0, 0.1);
    &:hover {
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
        /* transform: translateY(-1px); */
    }
    /* padding: 0 100px; */
`;

const ProjectsOptions = styled.div`
    /* background-color: blue; */
    /* padding: 80px 0; */
    border-right: 1px solid #e5eaf4;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ProjectsGrid = styled.div`
    padding: 100px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    place-items: center;
    /* background-color: yellow; */
    /* border-radius: 20px; */
    @media ${device.large} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.small} {
        grid-template-columns: 1fr;
    }
`;

const ProjectCard = styled(motion.a)`
    font-family: "Nunito";
    width: 300px;
    height: 300px;
    perspective: 1000px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    /* box-shadow: -2px -2px 3px 0px rgba(0, 0, 0, 0.4); */

    .title {
        font-size: 15px;
        font-weight: 500;
        color: #000;
    }
    .content {
        font-size: 18px;
        font-weight: 700;
        color: #000;
    }

    /**Card Flip Feature */
    /* &:hover {
        transition: transform 0.1s;

        transform: scale(1.05) rotate(-1deg) translateX(-10px);
    } */

    /* backface-visibility: hidden; */
    /**TEMP */
    /* background: white; */
`;

const ProjectCardInner = styled(motion.div)`
    border-radius: 20px;
    /* position: relative; */
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    /* box-shadow: -2px -2px 3px 0px rgba(0, 0, 0, 0.4); */
    /* &:hover {
        box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.3);
    } */
    &.rotate {
        transition: transform 0.6s;
        transform: rotateY(180deg) rotate(-90deg) translate(0px) scale(3);
    }
    &.rotate-back {
        transition: transform 0.6s;
        transform: rotateY(0deg);
    }
`;

const ProjectCardShared = styled.div`
    border-radius: 20px;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

const ProjectCardFront = styled(ProjectCardShared)``;
const ProjectCardBack = styled(ProjectCardShared)`
    transform: rotateY(180deg);
`;

const Button = styled.button`
    cursor: pointer;
    background-color: #000;
    color: #fff;
    padding: 17px;
    border: none;
    border-radius: 100px;
    position: relative;
    display: grid;
    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        height: 1.5px;
        width: 13px;
        content: "";
    }
    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        height: 13px;
        width: 1.5px;
        content: "";
    }
`;

const Unproject = styled(motion.a)`
    /* cursor: pointer; */
    /* border: 1px solid black; */
    width: 350px;
    height: 250px;

    /**TEMP */
    /* background: white; */
`;

const IMG = styled.img`
    align-self: center;
    width: 150px;
`;

const projectsList = [
    {
        title: "Genshin Wish Simulator",
        // bgColor: "#fd5b78",
        bgColor: "#f7d6e0",
        href: "https://ty4coffee.thekima.com/",
        content: "Developed in Typescript under Gatsbyjs.",
        github: "https://github.com/miwoju/genshin-wish-simulator-gatsby",
        projectImg: genshinImg1,
        hasContent: true,
    },
    {
        title: "Styled-Components Snippets Extension",
        // bgColor: "#fd5b78",
        bgColor: "#fcf6bd",
        href: "https://github.com/miwoju/styled-components-snippets",
        content:
            "Coded snippets syntax that I still personally use to this day.",
        github: "https://github.com/miwoju/styled-components-snippets",
        hasContent: false,
    },
    {
        title: "GG.ez Player Stats Tracker",
        // bgColor: "#fd5b78",
        bgColor: "#e4c1f9",
        href: "https://ggez.thekima.com/",
        content: "League of Legends(Riot API) player stats tracker.",
        github: "https://github.com/miwoju/league-app-client",
        hasContent: false,
    },
    {
        title: "Mock Twitter Project",
        // bgColor: "#fd5b78",
        bgColor: "#a9def9",
        href: "https://mocksocial.thekima.com/",
        content:
            "Mock twitter app with authentication, sign ups and log ins, and comment post/delete/edits.",
        github: "https://github.com/miwoju/mock-twitter-client",
        hasContent: false,
    },
    {
        title: "TBA",
        // bgColor: "#fd5b78",
        bgColor: "#b2f7ef",
        // href: "https://github.com/miwoju/styled-components-snippets",
        content: "Many more coming soon!",
        github: "",
        hasContent: false,
    },
    // {
    //     title: "Genshin Wish Simulator",
    //     bgColor: "#00A1BE",
    //     href: "https://ty4coffee.thekima.com/",
    //     content:
    //         "Developed in Typescript under Gatsbyjs. Chinese is also supported. From animations to gacha logic to storage.",
    // },
    // {
    //     title: "Genshin Wish Simulator",
    //     bgColor: "#8A6FBC",
    //     href: "https://ty4coffee.thekima.com/",
    //     content:
    //         "Developed in Typescript under Gatsbyjs. Chinese is also supported. From animations to gacha logic to storage.",
    // },
];

const projectCardVar = {
    hidden: {},
    show: {
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
        // boxShadow: "-2px -2px 3px 0px rgba(0, 0, 0, 0.4)",
    },
    hover: {
        scale: 1.04,
        rotate: -0.5,
        x: 7,
        y: -7,
        // boxShadow: "-4px -4px 8px 0px rgba(0, 0, 0, 0.3)",
    },
};

const projectCardInnerVar = {
    hidden: {},
    show: {
        boxShadow: "-2px -2px 3px 0px rgba(0, 0, 0, 0.2)",
    },
    hover: {
        boxShadow: "-3px 3px 6px 2px rgba(0, 0, 0, 0.15)",
    },
};

const HomeProjects = () => {
    // const [isModalActive, globalDispatch] = useState(false);

    const { isModalActive } = useGlobalStateContext();
    const globalDispatch = useGlobalDispatchContext();

    // const handleClick = (title) => {
    //     !isModalActive &&
    //         globalDispatch({
    //             type: "TOGGLE_MODAL",
    //             payload: title,
    //         });
    // };
    return (
        <StyledHomeProjects id="projects">
            <Container>
                <Flex center column fullHeight>
                    <SectionHeader>Projects</SectionHeader>
                    {/* <HomeProjectsDetailed /> */}
                    <ProjectsContainer>
                        <ProjectsOptions>
                            <p
                                style={{
                                    padding: "25px 0 50px 0",
                                    fontWeight: 700,
                                    fontSize: "12px",
                                }}
                            >
                                Memos
                            </p>
                            <Button></Button>
                        </ProjectsOptions>
                        <ProjectsGrid>
                            {projectsList.map(
                                (
                                    {
                                        title,
                                        bgColor,
                                        href,
                                        content,
                                        github,
                                        projectImg,
                                        hasContent,
                                    },
                                    index
                                ) => (
                                    <ProjectCard
                                        onClick={() => {
                                            hasContent &&
                                                globalDispatch({
                                                    type: "TOGGLE_MODAL",
                                                    payload: title,
                                                });
                                        }}
                                        key={index}
                                        initial="hidden"
                                        animate="show"
                                        variants={projectCardVar}
                                        whileHover={
                                            isModalActive ? "show" : "hover"
                                        }
                                        style={
                                            isModalActive === title
                                                ? { zIndex: 10 }
                                                : { zIndex: 1 }
                                        }
                                        href={hasContent ? false : href}
                                        target="_blank"

                                        // href="https://ty4coffee.thekima.com/"
                                        // target="_blank"
                                    >
                                        <ProjectCardInner
                                            variants={projectCardInnerVar}
                                            className={
                                                isModalActive === title
                                                    ? "rotate"
                                                    : "rotate-back"
                                            }
                                        >
                                            <ProjectCardFront
                                                style={{
                                                    backgroundColor: bgColor,
                                                }}
                                            >
                                                <p className="content">
                                                    {content}
                                                </p>
                                                {projectImg && (
                                                    <IMG src={projectImg} />
                                                )}
                                                <h4 className="title">
                                                    {/* <a
                                                        href={github}
                                                        target="_blank"
                                                    > */}
                                                    {title}
                                                    {/* </a> */}
                                                </h4>
                                            </ProjectCardFront>
                                            <ProjectCardBack
                                                style={{
                                                    backgroundColor: bgColor,
                                                }}
                                            ></ProjectCardBack>
                                        </ProjectCardInner>
                                    </ProjectCard>
                                )
                            )}
                            {/* <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject> */}
                        </ProjectsGrid>
                    </ProjectsContainer>
                </Flex>
            </Container>
        </StyledHomeProjects>
    );
};

export default HomeProjects;
