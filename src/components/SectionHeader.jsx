import React from "react";
import styled from "styled-components";

const StyledSectionHeader = styled.div`
    text-align: center;
    font-size: 3.6rem;
    padding-bottom: 60px;
    grid-area: ${(props) => (props.gridArea ? props.gridArea : "header")};
`;
const Header = styled.header`
    color: ${(props) =>
        props.color ? props.color : props.theme.primaryStrong};
    font-weight: 600;
`;

const SubHeader = styled.header`
    ${(props) => (props.color ? props.color : props.theme.primaryStrong)};
    font-weight: 400;
    font-size: 1.6rem;
    margin-top: 30px;
`;

const SectionHeader = ({ children, gridArea, color, subheader }) => {
    return (
        <StyledSectionHeader color={color} gridArea={gridArea}>
            <Header color={color}>{children}</Header>
            {subheader && <SubHeader>{subheader}</SubHeader>}
        </StyledSectionHeader>
    );
};

export default SectionHeader;
