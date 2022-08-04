import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Styled components
import styled, { css } from "styled-components";

import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";
import { device } from "../../util/device";
import { skillsList } from "../../assets/data/skillsList";

const StyledHomeSkills = styled.section`
    color: ${(props) => props.theme.textInverse};
    /* box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25); */

    /* background: linear-gradient(
        to bottom right,
        ${(props) => props.theme.secondary} 60%,
        #ff9966
    ); */
    background-color: #0f1922;
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
    @media ${device.extraSmall} {
        display: none;
    }
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
    @media ${device.extraSmall} {
        display: none;
    }
`;

const Highlight = styled.span`
    font-style: italic;
    font-weight: 700;
`;

const SkillsContainer = styled(motion.div)`
    position: relative;
    color: ${(props) => props.theme.text};
    background-color: #fff;
    padding: 10px 30px 18px 30px;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadowFar};
    z-index: 2;
    width: 580px;
    @media ${device.medium} {
        width: 500px;
    }
    @media ${device.small} {
        padding: 10px 12px 0px 12px;
        width: 400px;
    }
    @media ${device.extraSmall} {
        width: 100%;
    }
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
    @media ${device.extraSmall} {
        display: none;
    }
    @media ${device.small} {
        width: 30px;
    }
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
    margin: 12px 0;
    /* width: 100%; */
    /* width: 520px; */
    background-color: darkgray;
    white-space: nowrap;
    /* @media ${device.medium} {
        width: 450px;
    }
    @media ${device.small} {
        width: 400px;
    } */

    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    @media ${device.extraSmallReverse} {
        ${(props) =>
            props.selected &&
            css`
                box-shadow: 0 0 0 3px rgba(0, 0, 0, 1);
            `}
    }
    .progress-bar {
        height: 100%;
        background-color: ${(props) => props.theme.secondary};
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        @media ${device.extraSmallReverse} {
            ${(props) =>
                props.selected &&
                css`
                    color: #000;
                `}
        }
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

const HomeSkills = () => {
    const [selected, setSelected] = useState(null);
    const [containerPosition, setContainerPosition] = useState("right");
    const [ref, inView] = useInView({ rootMargin: "-30%" });

    const handleSelect = (index) => {
        setContainerPosition("left");
        setSelected(index);
    };

    const handleClick = (direction) => {
        setContainerPosition(direction);
        if (selected === null) {
            setSelected(0);
        } else {
            /**Added later */
            setSelected(null);
        }
    };
    // const [ref, inView] = useInView();

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
        stiffness: 200,
        damping: 19,
    };
    return (
        <StyledHomeSkills id="skills">
            <Container>
                <SectionHeader primary gridArea="header">
                    My Skills
                </SectionHeader>
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
                        ref={ref}
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
                        <Label>Languages and Tools</Label>
                        <SubLabel>Mastery</SubLabel>
                        {skillsList.map(({ name, progress }, index) => (
                            <SkillProgress
                                whileHover={{ scale: 1.02 }}
                                key={index}
                                onClick={() => handleSelect(index)}
                                // ref={index === 5 ? ref : null}
                                selected={selected === index}
                            >
                                <motion.div
                                    variants={progressBarVar}
                                    custom={progress}
                                    className="progress-bar"
                                    selected={selected === index}
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
                        <Label variants={infoItemVar}>Why choose me?</Label>
                        <Content variants={infoItemVar}>
                            A Perfectionist.
                            <br />
                            Loves UX/UI design.
                            <br />
                            Prioritizes clean, fast, responsive code.
                            <br />
                            And I like working <Highlight>
                                really
                            </Highlight>{" "}
                            hard.
                        </Content>
                    </InfoContainer>
                    {selected !== null && containerPosition === "left" && (
                        <InfoContainer skills>
                            <Label>{skillsList[selected].name}</Label>
                            <Content skills>
                                {skillsList[selected].content}
                            </Content>
                        </InfoContainer>
                    )}
                </Flex>
            </Container>
        </StyledHomeSkills>
    );
};

export default HomeSkills;
