import React from "react";
import styled from "styled-components";
import { device } from "../../util/device";

const StyledProjectsStickyIMG = styled.img`
    width: 100%;
    max-width: 700px;
`;

const ProjectsStickyIMG = ({ src }) => {
    return (
        <StyledProjectsStickyIMG
            src={src}
        ></StyledProjectsStickyIMG>
    );
};

export default ProjectsStickyIMG;
