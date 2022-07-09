import React from "react";
import styled from "styled-components";

const StyledHomeProjectsDetailedContent = styled.div`
    margin: 50px 28px;
    font-size: 2rem;
    font-family: "Nunito", sans-serif;
    line-height: 1.6;
    .bold-text {
        font-weight: 700;
    }
    p {
        text-align: left;
        margin: 10px;
        ${(props) => props.italicize && `font-style: italic`};
    }
    a {
        text-align: center;
        margin: 10px;
    }
    li {
        text-align: left;
        margin: 7px;
    }
`;

const HomeProjectsDetailedContent = ({ children, italicize }) => {
    return (
        <StyledHomeProjectsDetailedContent italicize={italicize}>
            {children}
        </StyledHomeProjectsDetailedContent>
    );
};

export default HomeProjectsDetailedContent;
