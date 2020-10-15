import React, { Fragment, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";

const StyledHomeIntro = styled.div``;

const IntroHeader = styled(motion.header)`
    display: flex;
    /* font-size: 2.5rem; */
    font-size: 3rem;
    margin: 5px;
`;

const IntroBackdrop = styled(motion.div)`
    position: absolute;
    background-color: #fd5b78;
    width: 100%;
    pointer-events: none;
    /* z-index: 1; */
`;

const NavGrid = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    /* margin-top: 80px; */
`;
const NavGridItem = styled(motion.div)`
    position: relative;
    height: 350px;
    width: 250px;
    border: 2px solid black;
    margin: 4px;
    cursor: pointer;
    p {
        user-select: none;
        position: absolute;
        margin: 4px;
        font-size: 1.6rem;
    }
`;

const HomeIntro = () => {
    const [displayNavGrid, setDisplayNavGrid] = useState(false);

    const name = "Richard Shin";
    const description = ["A", "Full", "Stacks", "Web Developer"];

    //framer-motion
    const backdropControls = useAnimation();
    const nameControls = useAnimation();
    const subtextControls = useAnimation();

    useEffect(async () => {
        await Promise.all([
            backdropControls.start("show"),
            nameControls.start("show"),
            nameControls.start({
                color: "#fff",
                transition: { delay: 1.1 },
            }),
            subtextControls.start("show"),
            subtextControls.start({
                color: "#fff",
                transition: { delay: 1.1 },
            }),
        ]);
        await Promise.all([
            backdropControls.start({
                height: "0vh",
                bottom: 0,
                transition: { delay: 0.55, duration: 0.6, ease: "easeOut" },
            }),
            nameControls.start({
                y: -220,
                color: "#000",
                transition: { delay: 0.65, duration: 0.5, ease: "easeInOut" },
            }),
            subtextControls.start({
                display: "none",
                transition: { delay: 0.9 },
            }),
            setDisplayNavGrid(true),
        ]);
    }, []);

    const subtextVar = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 },
        },
    };
    const nameVar = {
        hidden: { opacity: 0, scale: 1, y: -10 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 1.1, duration: 0.5, ease: "easeOut" },
        },
    };
    const backdropVar = {
        hidden: { height: 0 },
        show: {
            height: "100vh",
            transition: { delay: 1, duration: 0.5 },
        },
    };
    const animateCharVar = {
        hidden: { y: -15, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.65, ease: "easeOut" },
        },
    };

    const navGridItemVar = {
        hidden: { opacity: 0, y: 200 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                opacity: { duration: 1.2 },
                delay: 0.3 + i * 0.2,
                duration: 0.6,
            },
        }),
        hover: {
            scale: 1.1,
            width: 350,
            transition: {
                scale: { ease: "easeInOut" },
                // fontSize: { duration: 0 },
            },
        },
    };

    const navGridItemTextVar = {
        hidden: { opacity: 0 },
        show: (i) => ({ opacity: 1, transition: { delay: 1 + i * 0.2 } }),
        hover: {
            scale: 4,
            fontWeight: 800,
            right: 30,
            bottom: -10,
            // color: "#fff",
            transition: { duration: 0.15 },
        },
    };

    return (
        <StyledHomeIntro>
            <IntroBackdrop
                variants={backdropVar}
                initial="hidden"
                animate={backdropControls}
            ></IntroBackdrop>
            <Container vh>
                <Flex center column fullHeight>
                    <IntroHeader
                        variants={nameVar}
                        initial="hidden"
                        animate={nameControls}
                    >
                        {name}
                    </IntroHeader>
                    <IntroHeader
                        variants={subtextVar}
                        initial="hidden"
                        animate={subtextControls}
                    >
                        {description.map((word, index) => (
                            <motion.div
                                key={index}
                                style={{ paddingRight: "7px" }}
                                variants={animateCharVar}
                            >
                                {word}
                            </motion.div>
                        ))}
                    </IntroHeader>
                    {displayNavGrid && (
                        <NavGrid>
                            {["about", "projects", "contact"].map((item, i) => (
                                <NavGridItem
                                    initial="hidden"
                                    animate="show"
                                    whileHover="hover"
                                    variants={navGridItemVar}
                                    custom={i}
                                >
                                    <motion.p
                                        variants={navGridItemTextVar}
                                        custom={i}
                                    >
                                        {item}
                                    </motion.p>
                                </NavGridItem>
                            ))}
                        </NavGrid>
                    )}
                </Flex>
            </Container>
        </StyledHomeIntro>
    );
};

export default HomeIntro;
