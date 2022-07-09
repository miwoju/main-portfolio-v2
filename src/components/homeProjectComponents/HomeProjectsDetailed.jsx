import React, { Children } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "../context/globalContext";

const StyledHomeProjectsDetailed = styled(motion.div)`
    display: block;
    position: fixed; /* Stay in place */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    /* background-color: rgba(0, 0, 0, 0.4); */
    /* background-color: rgba(${(props) => props.theme.secondaryHex} 0.4); */
    background-color: ${(props) => props.theme.secondary};
    text-align: center;
`;

const ModalContent = styled(motion.div)`
    /* background-color: #fefefe; */
    /* background-color: #0f0f10; */
    background-color: #e5eaf4;
    /* color: #ababab; */
    margin: 0 auto;
    padding: 40px 0;
    /* border: 1px solid #888; */
    height: 100%;
    overflow: auto; /* Enable scroll if needed */

    width: 80%; /* Could be more or less, depending on screen size */
    border-radius: 20px;
`;
const ModalContentContainer = styled.div`
    margin: 0 auto;
    width: 800px;
    /* height: 100%; */
`;

const ModalContentTitle = styled.h3`
    font-size: 4rem;
    margin: 40px 0;
`;

const HomeProjectsDetailed = ({ children }) => {
    const { isModalActive } = useGlobalStateContext();
    const globalDispatch = useGlobalDispatchContext();

    const handleOutsideClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target);
        globalDispatch({ type: "TOGGLE_MODAL", payload: false });
    };

    const modalContainerVar = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                delay: 0.3,
                // delayChildren: 0.8,
            },
        },
    };
    const modalContentVar = {
        hidden: { opacity: 0, y: -200, scale: 0.9 },
        show: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { ease: "easeInOut", duration: 0.1 },
        },
    };

    return (
        <StyledHomeProjectsDetailed
            onClick={(e) => handleOutsideClick(e)}
            variants={modalContainerVar}
            initial="hidden"
            animate="show"
        >
            <ModalContent
                variants={modalContentVar}
                initial="hidden"
                animate="show"
                onClick={(e) => e.stopPropagation()}
            >
                <ModalContentTitle>{isModalActive}</ModalContentTitle>
                <ModalContentContainer>{children}</ModalContentContainer>
            </ModalContent>
            {/* {console.log(isModalActive)} */}
        </StyledHomeProjectsDetailed>
    );
};

export default HomeProjectsDetailed;
