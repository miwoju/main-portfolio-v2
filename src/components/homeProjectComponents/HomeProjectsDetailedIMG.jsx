import React from "react";
import styled from "styled-components";
import { device } from "../../util/device";

const StyledHomeProjectsDetailedIMG = styled.img`
    width: 100%;
    max-width: 700px;
`;

const HomeProjectsDetailedIMG = ({ src }) => {
    return (
        <StyledHomeProjectsDetailedIMG
            src={src}
        ></StyledHomeProjectsDetailedIMG>
    );
};

export default HomeProjectsDetailedIMG;
