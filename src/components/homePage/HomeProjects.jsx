import React from "react";
import { motion } from "framer-motion";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";
import projectImg from "../../assets/images/projects-img.png";

const StyledHomeProjects = styled.div`
    padding: 100px 0;
`;

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* border-radius: 20px; */
`;

const Project = styled(motion.a)`
    cursor: pointer;
    /* border: 1px solid black; */
    width: 350px;
    height: 250px;

    /**TEMP */
    background: white;
`;

const IMG = styled.img`
    width: 350px;
`;

const HomeProjects = () => {
    return (
        <StyledHomeProjects>
            <Container>
                <Flex center column fullHeight>
                    <SectionHeader>Projects</SectionHeader>
                    <ProjectsGrid>
                        <Project
                            whileHover={{ scale: 1.05 }}
                            href="https://ty4coffee.thekima.com/"
                            target="_blank"
                        >
                            <IMG src={projectImg} />
                            <p style={{ fontSize: 14 }}>
                                Genshin Wish Simulator
                            </p>
                        </Project>
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
