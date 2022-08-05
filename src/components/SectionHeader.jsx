import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
    /* text-align: center; */
    font-size: 3.6rem;
    padding-bottom: 60px;
    grid-area: ${(props) => (props.gridArea ? props.gridArea : "header")};
    text-align: ${(props) =>
        props.left ? "left" : props.right ? "right" : "center"};
`;
const Header = styled.header`
    color: ${(props) =>
        props.color
            ? props.color
            : props.inverse
            ? props.theme.textInverse
            : props.primary
            ? props.theme.primary
            : props.theme.background};
    /* color: ${(props) => props.theme.secondary}; */
    font-weight: 600;
    white-space: pre-wrap;
`;

const SubHeader = styled.header`
    /* ${(props) => (props.color ? props.color : props.theme.primaryStrong)}; */
    color: ${(props) =>
        props.color
            ? props.color
            : props.inverse
            ? props.theme.textInverse
            : props.theme.background};
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 30px;
    max-width: 600px;
    white-space: pre-wrap;
`;

const SectionHeader = ({
    children,
    gridArea,
    color,
    subheader,
    left,
    right,
    inverse,
    primary,
}) => {
    return (
        <StyledSectionHeader
            color={color}
            gridArea={gridArea}
            left={left}
            right={right}
        >
            <Header color={color} inverse={inverse} primary={primary}>
                {children}
            </Header>
            {subheader && <SubHeader inverse={inverse}>{subheader}</SubHeader>}
        </StyledSectionHeader>
    );
};

export default SectionHeader;
