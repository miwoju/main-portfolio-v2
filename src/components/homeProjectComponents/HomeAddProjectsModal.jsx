import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useGlobalDispatchContext } from "../context/globalContext";
import { device } from "../../util/device";

const StyledHomeProjectsDetailed = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed; /* Stay in place */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 19;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: rgba(${(props) => props.theme.secondaryHex} 0.4); */
    /* background-color: ${(props) => props.theme.secondary}; */
    text-align: center;
    padding: 15px;
`;
const ModalForm = styled(motion.form)`
    /* background-color: #fefefe; */
    /* background-color: #0f0f10; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #faf9f9;
    /* color: #ababab; */
    margin: 0px auto;
    padding: 30px 30px;
    /* border: 1px solid #888; */
    overflow: auto; /* Enable scroll if needed */
    width: 550px; /* Could be more or less, depending on screen size */
    min-height: 650px;

    /* @media ${device.small} {
        width: 100%;
    } */
    border-radius: 5px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const ModalFormLabel = styled.label`
    margin: 20px 5px 5px 5px;
    font-size: 1.6rem;
    align-self: flex-start;
`;

const ModalFormInput = styled.input`
    padding: 8px;
    margin-bottom: 10px;
    font-size: 1.6rem;
    /* max-width: 400px; */
    width: 100%;
`;

const ModalFormTextArea = styled.textarea`
    padding: 8px;
    margin-bottom: 10px;
    font-size: 1.6rem;
    resize: none;
    height: 300px;
    /* max-width: 400px; */
    width: 100%;
`;

const ModalFormTitle = styled.h3`
    font-size: 3rem;
    margin: 10px 0;
`;

const ModalFormButton = styled.button`
    padding: 10px;
    border: none;
    margin: 20px 8px;
    background-color: ${(props) =>
        props.Submit ? props.theme.primary : "#fff"};
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
`;

const ModalErrorMessage = styled.div`
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
`;

const HomeProjectsDetailed = () => {
    const globalDispatch = useGlobalDispatchContext();
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const [errorMessage, setErrorMessage] = useState({
        titleError: "",
        contentError: "",
    });

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

    const handleClick = (e, type) => {
        e.preventDefault();
        e.stopPropagation();

        const LENGTH_OF_TITLE = 5;
        const LENGTH_OF_CONTENT = 10;

        if (type === "cancel") {
            globalDispatch({ type: "TOGGLE_MODAL", payload: false });
        }

        let titleError = "";
        let contentError = "";

        if (titleValue.length < LENGTH_OF_TITLE) {
            titleError = `Title must be at least ${LENGTH_OF_TITLE} characters.`;
        }
        if (contentValue.length < LENGTH_OF_CONTENT) {
            contentError = `Content must be at least ${LENGTH_OF_CONTENT} characters.`;
        }
        setErrorMessage({
            titleError: titleError,
            contentError: contentError,
        });

        if (titleError.length > 0 || contentError.length > 0) return;

        if (type === "submit") {
            globalDispatch({
                type: "ADD_NOTE",
                payload: {
                    title: titleValue,
                    content: contentValue,
                    bgColor: "#f7d6e0",
                    href: `Is there even a site for ${titleValue.toUpperCase()}?`,
                    github: "I don't need your github. This is your project not mine!",
                },
            });
            globalDispatch({ type: "TOGGLE_MODAL", payload: false });
            setErrorMessage({
                titleError: "",
                contentError: "",
            });
        }
    };

    const handleInput = (e, type) => {
        if (type === "title") {
            setTitleValue(e.target.value);
        }
        if (type === "content") {
            setContentValue(e.target.value);
        }
    };

    return (
        <StyledHomeProjectsDetailed
            onClick={(e) => handleOutsideClick(e)}
            variants={modalContainerVar}
            initial="hidden"
            animate="show"
        >
            <ModalForm
                variants={modalContentVar}
                initial="hidden"
                animate="show"
                onClick={(e) => e.stopPropagation()}
            >
                <ModalFormTitle>Add Note</ModalFormTitle>
                <ModalFormLabel>Name of Project:</ModalFormLabel>
                <ModalFormInput
                    onChange={(e) => handleInput(e, "title")}
                    placeholder={"Title of project"}
                />
                <ModalErrorMessage>{errorMessage.titleError}</ModalErrorMessage>
                <ModalFormLabel>Project Description:</ModalFormLabel>
                <ModalFormTextArea
                    onChange={(e) => handleInput(e, "content")}
                    placeholder={"Short summary of the project"}
                />
                <ModalErrorMessage>
                    {errorMessage.contentError}
                </ModalErrorMessage>
                {/* <ModalFormLabel>Title</ModalFormLabel> */}
                {/* <ModalFormInput /> */}
                <div>
                    <ModalFormButton
                        onClick={(e) => handleClick(e, "submit")}
                        Submit
                    >
                        Submit
                    </ModalFormButton>
                    <ModalFormButton
                        onClick={(e) => handleClick(e, "cancel")}
                        Cancel
                    >
                        Cancel
                    </ModalFormButton>
                </div>
                <p style={{ fontSize: "1.1rem" }}>
                    ps: I made this just for fun! The data is not stored, don't
                    worry : )
                </p>
            </ModalForm>
        </StyledHomeProjectsDetailed>
    );
};

export default HomeProjectsDetailed;
