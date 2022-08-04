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
import { aboutMeInfo } from "../../assets/data/aboutMeInfo";

import selfie from "../../assets/images/about-img.jpg";

const StyledHomeAbout = styled(motion.section)`
    /* color: ${(props) => props.theme.textInverse}; */
    /* box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25); */

    /* background: linear-gradient(
        to bottom right,
        ${(props) => props.theme.secondary} 60%,
        #ff9966
    ); */
    /* background-color: ${(props) => props.theme.secondary}; */
    /* padding: 100px 0; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* align-items: center;
    justify-content: center; */
    color: ${(props) => props.theme.textInverse};
    background-color: #0f1922;
    overflow: hidden;
    height: 0%;

    @media ${device.small} {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

const TextContent = styled(motion.div)`
    /* text-align: justify; */
    /* width: 500px; */
    /* align-items: center; */
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    padding: 80px 40px;
    justify-content: center;
    p {
        color: #ffffffb3;
        font-size: 1.8rem;
        line-height: 1.5em;
        white-space: pre-wrap;
        font-weight: 500;
        font-family: "Nunito";
        max-width: 800px;
        .italic {
            font-style: italic;
        }
        .bold {
            font-weight: 800;
        }
    }
    @media ${device.medium} {
        /* display: none; */
        padding: 40px 50px;
        p {
            font-size: 1.6rem;
        }
    }
    @media ${device.small} {
        padding: 40px 20px;
        /* display: none; */
    }
    @media ${device.extraSmall} {
        padding: 40px 20px;
        /* display: none; */
    }
`;

const AvatarContent = styled(motion.div)`
    display: grid;
    place-items: center;

    /* @media ${device.extraSmall} {
        display: none;
    } */
`;

const AvatarIMG = styled.div`
    width: 100%;
    height: 100%;
    background: url(${selfie}) top no-repeat;
    background-size: cover;

    @media ${device.small} {
        height: 300px;
        width: 40%;
    }
    @media ${device.extraSmall} {
        height: 400px;
        width: 100%;
    }
`;

const sectionVariant = {
    hidden: { height: "0%" },
    show: { height: "100%" },
    transition: { duration: 0.4 },
};

const HomeAbout = () => {
    const [selected, setSelected] = useState(null);
    const [containerPosition, setContainerPosition] = useState("right");
    const [ref, inView] = useInView({ rootMargin: "-30%" });

    const { summary } = aboutMeInfo;
    return (
        <StyledHomeAbout
            id="about"
            initial="hidden"
            animate="show"
            variants={sectionVariant}
        >
            <AvatarContent>
                <AvatarIMG src={require(`../../assets/images/about-img.jpg`)} />
            </AvatarContent>
            <TextContent>
                <SectionHeader primary left gridArea="header">
                    About
                </SectionHeader>
                <p>
                    I'm <span className="bold">Richard Shin</span>, a passionate
                    developer bringing you cutting-edge front end web design &
                    technologies. Obsessed with self-growth and learning, I've
                    taught myself the English alphabet at the age of 4. Since
                    then I've <span className="italic">taught</span> myself{" "}
                    <span className="bold">web development</span>,{" "}
                    <span className="bold">audio engineering</span>,
                    <span className="bold"> music production</span>, PC systems,
                    design softwares, video editing, dancing,{" "}
                    <span className="italic">you name it!</span>
                    <br />
                    <br />I have <span className="italic">endless</span>{" "}
                    passions: We can talk about fascinating animals, phone tech,
                    human psychology, food, anything!
                    <br />
                    <br />
                    <span className="italic">
                        Maybe I'm just <span className="bold">passionate</span>{" "}
                        about life.
                    </span>
                </p>
            </TextContent>
        </StyledHomeAbout>
    );
};

export default HomeAbout;
