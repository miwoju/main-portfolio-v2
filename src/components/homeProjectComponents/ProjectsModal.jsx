import React, { Children } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
    useGlobalDispatchContext,
    useGlobalStateContext,
} from "../context/globalContext";
import CloseButton from "../CloseButton";
import { device } from "../../util/device";

const StyledProjectsModal = styled(motion.div)`
    display: block;
    position: fixed; /* Stay in place */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 19;
    /* background-color: rgba(0, 0, 0, 0.4); */
    /* background-color: rgba(${(props) => props.theme.secondaryHex} 0.4); */
    /* background-color: ${(props) => props.theme.secondary}; */
    background-color: #f7d6e0;
    text-align: center;
    padding: 20px 0;
`;
const ModalContent = styled(motion.div)`
    /* background-color: #fefefe; */
    /* background-color: #0f0f10; */
    background-color: #faf9f9;
    /* color: #ababab; */
    margin: 0px auto;
    padding: 40px 0;
    /* border: 1px solid #888; */
    height: 100%;
    overflow: auto; /* Enable scroll if needed */

    width: 80%; /* Could be more or less, depending on screen size */
    @media ${device.small} {
        width: 100%;
    }
    border-radius: 5px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;
const ModalContentContainer = styled.div`
    margin: 0 auto;
    /* width: 800px; */
    max-width: 800px;
`;

const ModalContentTitle = styled.h3`
    font-size: 4rem;
    margin: 40px 0;
`;

const ProjectsModal = ({ children }) => {
    const { isModalActive } = useGlobalStateContext();
    const globalDispatch = useGlobalDispatchContext();

    const handleOutsideClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
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
                delay: 0.2,
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
            transition: { ease: "easeInOut", duration: 0.05 },
        },
    };

    return (
        <StyledProjectsModal
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
                <CloseButton />
                <ModalContentTitle>{isModalActive}</ModalContentTitle>
                <ModalContentContainer>{children}</ModalContentContainer>
            </ModalContent>
        </StyledProjectsModal>
    );
};

export default ProjectsModal;
