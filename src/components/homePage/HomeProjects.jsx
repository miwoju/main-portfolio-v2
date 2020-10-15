import React from "react";
import { motion } from "framer-motion";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";

const StyledHomeProjects = styled.div`
    padding: 100px 0;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* border-radius: 20px; */
`;

const Project = styled(motion.div)`
    cursor: pointer;
    border: 1px solid black;
    width: 350px;
    height: 250px;

    /**TEMP */
    background: white;
`;

const HomeProjects = () => {
    return (
        <StyledHomeProjects>
            <Container>
                <Flex center column fullHeight>
                    <SectionHeader>Projects</SectionHeader>
                    <ProjectsGrid>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                        <Project whileHover={{ scale: 1.05 }}></Project>
                    </ProjectsGrid>
                </Flex>
            </Container>
        </StyledHomeProjects>
    );
};

export default HomeProjects;
