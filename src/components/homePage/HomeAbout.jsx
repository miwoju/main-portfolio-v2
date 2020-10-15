import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { ref, useInView } from "react-intersection-observer";

//Styled components
import styled, { css } from "styled-components";

import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";

const StyledHomeAbout = styled.div`
    color: ${(props) => props.theme.textInverse};
    /* box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25); */

    background: linear-gradient(
        to bottom right,
        ${(props) => props.theme.secondary} 60%,
        #ff9966
    );
    padding: 100px 0;
`;

const InfoContainer = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 600px;
    width: 50%;
    ${(props) => (props.skills ? "left: 50%" : "right: 50%")};
`;

const Label = styled(motion.p)`
    font-weight: 600;
    font-size: 2.2rem;
    padding: 15px 0 5px 0;
    text-align: center;
`;

const SubLabel = styled(motion.p)`
    font-size: 1.4rem;
    padding-bottom: 5px;
    text-align: center;
    color: #000;
`;

const Content = styled(motion.p)`
    /* text-align: justify; */
    font-size: 1.5rem;
    font-weight: 500;
    /* width: 500px; */
    white-space: pre-wrap;
    padding: 0 80px;
    line-height: 2em;
    text-align: ${(props) => (props.skills ? "justify" : "center")};
`;

const Highlight = styled.span`
    font-style: italic;
    font-weight: 700;
`;

const SkillsContainer = styled(motion.div)`
    position: relative;
    color: ${(props) => props.theme.text};
    background-color: #fff;
    padding: 10px 18px 18px 18px;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadowFar};
    z-index: 2;
`;

const ArrowIcon = styled.div`
    cursor: pointer;
    display: grid;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 55px;
    padding: 10px;
    color: #fff;
    font-size: 2rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    &:hover {
        color: #000;
        background: rgba(255, 255, 255, 0.6);
    }
    ${(props) =>
        props.left &&
        css`
            left: -6%;
            border-radius: 40px 0 0 40px;
        `};
    ${(props) =>
        props.right &&
        css`
            right: -6%;
            justify-content: flex-end;
            border-radius: 0 40px 40px 0;
        `};
`;

const SkillProgress = styled(motion.div)`
    cursor: pointer;
    margin: 12px;
    width: 520px;
    background-color: darkgray;
    white-space: nowrap;
    /* box-shadow: ${(props) => props.theme.boxShadowClose}; */
    .progress-bar {
        height: 100%;
        background-color: ${(props) => props.theme.secondary};
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            font-size: 1.4rem;
            font-weight: 500;
            padding: 10px;
            margin-left: 18px;
        }
        .progress-percentage {
            font-size: 1.2rem;
            font-weight: 500;
            margin-right: 5px;
        }
    }
`;

const HomeAbout = () => {
    const [selected, setSelected] = useState(null);
    const [containerPosition, setContainerPosition] = useState("right");
    const [ref, inView] = useInView();

    const handleSelect = (name) => {
        setContainerPosition("left");
        setSelected(name);
    };

    const handleClick = (direction) => {
        setContainerPosition(direction);
        if (selected === null) {
            setSelected("HTML");
        } else {
            /**Added later */
            setSelected(null);
        }
    };
    // const [ref, inView] = useInView();
    const skillsList = [
        { name: "HTML", progress: 95 },
        { name: "CSS", progress: 90 },
        { name: "React", progress: 90 },
        { name: "Javascript", progress: 85 },
        { name: "Firebase", progress: 70 },
        { name: "Express", progress: 65 },
        { name: "Styled Components", progress: 90 },
        { name: "Material UI", progress: 85 },
        { name: "Framer Motion", progress: 80 },
        { name: "Node.js", progress: 65 },
    ];

    const skillsContainerVar = {
        hidden: { opacity: 0, x: -200 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.07,
            },
        },
    };

    const infoContainerVar = {
        hidden: {},
        show: { transition: { staggerChildren: 0.4 } },
    };
    const infoItemVar = {
        hidden: { opacity: 0, scale: 1.1 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };

    const progressBarVar = {
        hidden: { width: "0%" },
        show: (progress) => ({
            width: `${progress}%`,
            transition: { duration: 1, ease: "circOut" },
        }),
    };

    const spring = {
        type: "spring",
        stiffness: 270,
        damping: 19,
    };
    return (
        <StyledHomeAbout>
            <Container>
                <SectionHeader gridArea="header">ABOUT</SectionHeader>
                <Flex
                    fullHeight
                    style={{
                        justifyContent:
                            containerPosition === "left"
                                ? "flex-start"
                                : "flex-end",
                    }}
                >
                    <SkillsContainer
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        variants={skillsContainerVar}
                        layout
                        transition={spring}
                    >
                        {containerPosition === "right" && (
                            <ArrowIcon onClick={() => handleClick("left")} left>
                                <i className="fas fa-chevron-left"></i>
                            </ArrowIcon>
                        )}
                        {containerPosition === "left" && (
                            <ArrowIcon
                                onClick={() => handleClick("right")}
                                right
                            >
                                <i className="fas fa-chevron-right"></i>
                            </ArrowIcon>
                        )}
                        <Label>Languages I've Learned</Label>
                        <SubLabel>Rough Mastery of my Skills</SubLabel>
                        {skillsList.map(({ name, progress }, index) => (
                            <SkillProgress
                                whileHover={{ scale: 1.02 }}
                                key={index}
                                onClick={() => handleSelect(name)}
                                ref={index === 5 ? ref : null}
                                style={
                                    selected === name
                                        ? {
                                              boxShadow:
                                                  "0 0 0 3px rgba(0, 0, 0, 1)",
                                          }
                                        : {
                                              boxShadow:
                                                  "1px 1px 3px rgba(0, 0, 0, 0.6)",
                                          }
                                }
                            >
                                <motion.div
                                    variants={progressBarVar}
                                    custom={progress}
                                    className="progress-bar"
                                    style={{
                                        color:
                                            selected === name ? "#000" : "#fff",
                                    }}
                                >
                                    <p>{name}</p>
                                    <CountUp
                                        start={0}
                                        end={progress}
                                        suffix="%"
                                        className="progress-percentage"
                                    />
                                </motion.div>
                            </SkillProgress>
                        ))}
                    </SkillsContainer>
                    <InfoContainer
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        variants={infoContainerVar}
                    >
                        <Label variants={infoItemVar}>Now why choose me?</Label>
                        <Content variants={infoItemVar}>
                            A Perfectionist.
                            <br />
                            Loves UX/UI design.
                            <br />
                            Prioritizes clean, fast, responsive code.
                            <br />
                            And I work really, <Highlight>
                                really
                            </Highlight>{" "}
                            hard.
                        </Content>
                    </InfoContainer>
                    {selected && containerPosition === "left" && (
                        <InfoContainer skills>
                            <Label>{selected}</Label>
                            <Content skills>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </Content>
                        </InfoContainer>
                    )}
                </Flex>
            </Container>
        </StyledHomeAbout>
    );
};

export default HomeAbout;
