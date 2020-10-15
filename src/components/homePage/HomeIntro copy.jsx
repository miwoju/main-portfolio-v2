import React, { useEffect } from "react";
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
    /* z-index: 1; */
`;

const HomeIntro = () => {
    const name = "Richard Shin";
    const description = ["A", "Full", "Stacks", "Web Developer"];

    //framer-motion
    const backdropControls = useAnimation();
    const introTextControls = useAnimation();

    useEffect(async () => {
        await backdropControls.start({
            height: "100vh",
            transition: { delay: 1, duration: 0.5, ease: "easeOut" },
        });
        await backdropControls.start({
            height: "0vh",
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
        });
    }, []);

    const introDescVar = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };
    const introNameVar = {
        hidden: { opacity: 0, scale: 1, y: -10 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: 1.1, duration: 0.5, ease: "easeOut" },
        },
    };
    const introBackdropVar = {
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
    return (
        <StyledHomeIntro>
            <IntroBackdrop
                variants={introBackdropVar}
                initial="hidden"
                animate={backdropControls}
            ></IntroBackdrop>
            <Container vh>
                <Flex center column fullHeight>
                    <IntroHeader
                        variants={introNameVar}
                        initial="hidden"
                        animate="show"
                    >
                        {name}
                    </IntroHeader>
                    <IntroHeader
                        variants={introDescVar}
                        initial="hidden"
                        animate="show"
                    >
                        {/* {description.split("")} */}
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
                </Flex>
            </Container>
        </StyledHomeIntro>
    );
};

export default HomeIntro;
