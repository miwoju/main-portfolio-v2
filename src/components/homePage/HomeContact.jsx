import React from "react";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { device } from "../../util/device";

const StyledHomeContact = styled(motion.section)`
    padding: 100px 12px;
    background-color: ${(props) => props.theme.primary};
    overflow-x: hidden;
    /* color: ${(props) => props.theme.textInverse}; */
    .input {
        font-size: 1.6rem;
        padding: 10px;
        margin-bottom: 15px;
        outline: none;
        border: none;
    }
`;
const Form = styled(motion.form)`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    width: 600px;
    /* background: ${(props) => props.theme.background}; */
    /* padding: 20px; */
    @media ${device.extraSmall} {
        width: 100%;
    }
`;
// const Label = styled.label`
//     font-size: 1.6rem;
//     margin: 7px;
// `;

const Input = styled(motion.input)``;
const TextArea = styled(motion.textarea)`
    resize: none;
    height: 300px;
`;

const Button = styled(motion.button)`
    border: none;
    padding: 15px;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
    font-weight: bolder;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

const formVar = {
    hidden: {},
    show: {
        transition: {
            // delayChildren: 0.2,
            staggerChildren: 0.25,
        },
    },
};

const inputVar = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        x: -200,
        // y: -200,
    },
    show: {
        opacity: 1,
        scale: 1,
        x: 0,
        // y: 0,
    },
};

const buttonVar = {
    hidden: {
        opacity: 0,
        scale: 1.2,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            opacity: { duration: 0.1 },
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const HomeContact = () => {
    const [ref, inView] = useInView({ threshold: 0.5 });

    return (
        <StyledHomeContact id="contact">
            <Container>
                <Flex fullHeight center column>
                    <SectionHeader
                        color="#000"
                        subheader="Want to work on something together? Have any questions?
                        Email me at: miwoju.business@gmail.com
                    "
                    >
                        Say Hello
                    </SectionHeader>
                    <Form
                        ref={ref}
                        initial="hidden"
                        animate={inView && "show"}
                        variants={formVar}
                    >
                        <Input
                            variants={inputVar}
                            placeholder="Name"
                            name="name"
                            id="name"
                            className="input"
                            type="text"
                        ></Input>
                        <Input
                            variants={inputVar}
                            placeholder="Email"
                            name="email"
                            id="email"
                            className="input"
                            type="text"
                        ></Input>
                        <TextArea
                            variants={inputVar}
                            placeholder="Comments"
                            className="input"
                        ></TextArea>
                        <Button
                            variants={buttonVar}
                            type="submit"
                            onClick={(e) => e.preventDefault()}
                            whileHover={{ width: 110 }}
                        >
                            SUBMIT
                        </Button>
                    </Form>
                </Flex>
            </Container>
        </StyledHomeContact>
    );
};

export default HomeContact;
