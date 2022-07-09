import React, { Fragment, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ref, useInView } from "react-intersection-observer";

//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";

import selfie from "../../assets/images/about-img.jpg";
import projectImg from "../../assets/images/genshin-img1.png";

const StyledHomeIntro = styled.section``;

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

const CardGrid = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    /* margin-top: 80px; */
`;
const CardGridItem = styled(motion.a)`
    position: relative;
    height: 350px;
    width: 250px;
    border: 2px solid black;
    margin: 4px;
    display: flex;
    cursor: pointer;
    background-color: #fff;
    justify-content: center;
    transform-origin: 80% 80%;
    .title {
        user-select: none;
        position: absolute;
        margin: 4px;
        font-size: 1.6rem;
        color: #000;
    }
`;

const IMG = styled(motion.img)`
    align-self: center;
    width: 220px;
    margin: auto;
`;

const IMGBackdrop = styled(motion.div)`
    position: absolute;
    /* top: 0; */
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #e5989b; */
    z-index: -1;
    /* width: 100%; */
    /* height: 100%; */
`;

const IMGWrapper = styled(motion.div)`
    /* overflow: hidden; */
    width: 350px;
    display: flex;
    /* background-color: red; */
    margin: 14px 14px 14px 14px;
    border: 1px solid transparent;
    justify-content: center;
`;

const HomeIntro = () => {
    const [displayCardGrid, setDisplayCardGrid] = useState(false);
    const [ref, inView] = useInView({ rootMargin: "-400px" });

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
            setDisplayCardGrid(true),
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

    const CardGridItemVar = {
        hidden: { opacity: 0, y: 200 },
        ending: (i) => ({
            opacity: 0.8,
            x: i * -250 + 200,
            rotate: i * 15 + 15,
            scale: 1.4,
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
            zIndex: 5 - i,
            border: "none",
            transition: {
                opacity: { ease: "easeOut", duration: 1, delay: 0.6 },
                x: { duration: 0.3, delay: i * 0.1 },
                rotate: {
                    duration: 0.3,
                    delay: 0.1 + i * 0.1,
                },
            },
        }),
        show: (i) => ({
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            scale: 1,
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            border: "1px solid #a1a1a1",
            transition: {
                opacity: { duration: 1.2 },
                delay: 0.2 + i * 0.2,
                duration: 0.6,
            },
        }),
        hover: {
            backgroundColor: "transparent",
            scale: 1.1,
            width: 350,
            zIndex: 10,
            border: "none",
            transition: {
                scale: { ease: "easeOut" },
                duration: 0.6,
            },
        },
    };

    const CardGridItemTextVar = {
        hidden: { opacity: 0 },
        show: (i) => ({ opacity: 1, transition: { delay: 1 + i * 0.2 } }),
        hover: {
            scale: 4,
            fontWeight: 500,
            right: 30,
            bottom: -10,
            // color: "#fff",
            transition: { duration: 0.4 },
        },
    };

    const contactMotionVar = {
        hidden: { scale: 1, opacity: 0 },
        hover: {
            scale: 1.5,
            opacity: 1,
            transition: {
                boxShadow: { duration: 0.4 },
                scale: { ease: "easeOut", duration: 0.4 },
            },
        },
    };

    const imgBackdropVar = {
        hidden: { scale: 1, rotate: 0 },
        show: { height: 0, rotate: 0 },
        ending: {
            height: "100%",
            rotate: 0,
            transition: { ease: "easeOut" },
        },
        hover: {
            height: "100%",
            rotate: 45,
            transition: { ease: "easeOut" },
        },
    };

    const imgWrapperVar = {
        show: {
            borderColor: "transparent",
            overflow: "show",
            marginBottom: "14px",
        },
        ending: {
            borderColor: "#4a4a4a",
            overflow: "hidden",
            marginBottom: "70px",
        },
    };

    const imgVar = {
        hidden: { scale: 1 },
        hover: {
            scale: 1.25,
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
            transition: {
                boxShadow: { duration: 0.4 },
                scale: { ease: "easeOut", duration: 0.4 },
            },
        },
    };

    const introCardGridItems = [
        { title: "about", img: selfie, bgColor: "#fcf6bd" },
        { title: "projects", img: projectImg, bgColor: "#b2f7ef" },
        { title: "contact", bgColor: "#f7d6e0" },
    ];

    return (
        <StyledHomeIntro>
            <IntroBackdrop
                variants={backdropVar}
                initial="hidden"
                animate={backdropControls}
            ></IntroBackdrop>
            {console.log(inView)}
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
                    {displayCardGrid && (
                        <CardGrid ref={ref}>
                            {introCardGridItems.map(
                                ({ title, img, bgColor }, i) => (
                                    <CardGridItem
                                        href={`#${title}`}
                                        initial="hidden"
                                        animate={inView ? "show" : "ending"}
                                        whileHover={inView ? "hover" : "ending"}
                                        variants={CardGridItemVar}
                                        custom={i}
                                        style={{ zIndex: 5 - i }}
                                    >
                                        {/* {!inView && (
                                        <Polaroid>
                                            <span></span>
                                        </Polaroid>
                                    )} */}
                                        <IMGBackdrop
                                            variants={imgBackdropVar}
                                            animate={!inView && "ending"}
                                            style={{ backgroundColor: bgColor }}
                                        />
                                        <IMGWrapper variants={imgWrapperVar}>
                                            {title !== "contact" ? (
                                                <IMG
                                                    variants={imgVar}
                                                    src={img}
                                                    style={
                                                        inView
                                                            ? {}
                                                            : {
                                                                  width: "120%",
                                                              }
                                                    }
                                                />
                                            ) : (
                                                <motion.p
                                                    variants={contactMotionVar}
                                                    style={{
                                                        alignSelf: "center",
                                                        margin: "auto",
                                                        fontSize: 40,
                                                        fontweight: 700,
                                                        color: "#4b4b4b",
                                                    }}
                                                >
                                                    Hi there!
                                                </motion.p>
                                            )}
                                        </IMGWrapper>
                                        <motion.p
                                            className="title"
                                            variants={CardGridItemTextVar}
                                            custom={i}
                                        >
                                            {title}
                                        </motion.p>
                                    </CardGridItem>
                                )
                            )}
                        </CardGrid>
                    )}
                </Flex>
            </Container>
        </StyledHomeIntro>
    );
};

export default HomeIntro;
