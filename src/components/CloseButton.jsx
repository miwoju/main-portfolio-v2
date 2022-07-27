import React from "react";
import styled from "styled-components";
import { useGlobalDispatchContext } from "./context/globalContext";

const StyledCloseButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    overflow: hidden;
    border: none;
    position: fixed;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    z-index: 99;
    right: 80%;
    top: 40px;
    cursor: pointer;
    &:hover {
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
        transform: rotate(90deg);
        transition: transform 0.2s ease-in-out;
    }
`;

const ButtonWrapper = styled.div`
    width: 100%;
    height: 100%;
    &:hover {
        background-color: rgba(${(props) => props.theme.secondaryHex} 0.4);
        /* transition: transform 0.2s ease-in-out; */
    }

    div {
        position: absolute;
        width: 3px;
        height: 27px;
        transform-origin: center;
        top: 50%;
        left: 50%;
        background-color: #4a4a4a;
        border-radius: 4px;
    }
    .line-1 {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    .line-2 {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const CloseButton = () => {
    const globalDispatch = useGlobalDispatchContext();
    return (
        <StyledCloseButton
            onClick={() =>
                globalDispatch({
                    type: "TOGGLE_MODAL",
                    payload: false,
                })
            }
        >
            <ButtonWrapper>
                <div className="line-1"></div>
                <div className="line-2"></div>
            </ButtonWrapper>
        </StyledCloseButton>
    );
};

export default CloseButton;
