import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";
// import HomeProjectsDetailed from "../homeProjectComponents/ProjectsModal";
import {
    useGlobalStateContext,
    useGlobalDispatchContext,
} from "../context/globalContext";
import { device } from "../../util/device";

const StyledHomeProjects = styled.section`
    padding: 100px 0;
    background-color: #e5eaf4;
    overflow-x: hidden;
`;

const ProjectsContainer = styled(motion.div)`
    background-color: #fff;
    height: 100%;
    /* width: 100%; */
    display: grid;
    justify-content: flex-start;
    grid-template-columns: 90px 1fr;
    border-radius: 25px;
    box-shadow: -1px -1px 3px 0px rgba(0, 0, 0, 0.1);

    @media ${device.extraSmall} {
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr;
    }
    &:hover {
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    }
    /* padding: 0 100px; */
`;

const ProjectsOptions = styled.div`
    border-right: 1px solid #e5eaf4;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto;
    padding: 25px 0;
    gap: 40px;
    @media ${device.extraSmall} {
        border-bottom: 1px solid #e5eaf4;
        padding: 0 25px;
        grid-template-columns: auto auto 1fr auto;
        grid-template-rows: 1fr;
    }
    /* justify-content: space-between; */
`;

const AddProjectButton = styled.button`
    cursor: pointer;
    background-color: #000;
    color: #fff;
    padding: 17px;
    border: none;
    border-radius: 100px;
    position: relative;
    display: grid;
    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        height: 1.5px;
        width: 13px;
        content: "";
    }
    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        height: 13px;
        width: 1.5px;
        content: "";
    }
`;

const ResetProjectButton = styled.button`
    border: none;
    font-size: 1rem;
    padding: 8px;
    /* justify-self: end; */
    /* margin-top: 40px; */
    cursor: pointer;
    font-weight: 700;
`;

const ProjectsGrid = styled.div`
    padding: 40px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
    place-items: center;

    /* background-color: yellow; */
    /* border-radius: 20px; */
    @media ${device.large} {
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.small} {
        grid-template-columns: 1fr;
    }
    @media ${device.extraSmall} {
        padding: 25px 25px;
    }
`;

const ProjectCard = styled(motion.div)`
    font-family: "Nunito";
    width: 300px;
    height: 300px;
    perspective: 1000px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    /* box-shadow: -2px -2px 3px 0px rgba(0, 0, 0, 0.4); */

    .title {
        font-size: 15px;
        font-weight: 500;
        color: #000;
    }
    .content {
        font-size: 18px;
        font-weight: 700;
        color: #000;
    }
`;

const ProjectCardInner = styled(motion.div)`
    border-radius: 20px;
    /* position: relative; */
    width: 100%;
    height: 100%;
    /* cursor: pointer; */
    transform-style: preserve-3d;
    /* box-shadow: -2px -2px 3px 0px rgba(0, 0, 0, 0.4); */
    /* &:hover {
        box-shadow: -4px -4px 8px 0px rgba(0, 0, 0, 0.3);
    } */
    &.rotate-into-content {
        transition: transform 0.6s;
        transform: rotateY(180deg) rotate(-90deg) translate(0px) scale(3);
    }

    &.rotate {
        transition: transform 0.6s;
        transform: rotateY(180deg);
    }
    &.rotate-back {
        transition: transform 0.6s;
        transform: rotateY(0deg);
    }
`;

const ProjectCardShared = styled.div`
    border-radius: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

const ProjectCardFront = styled(ProjectCardShared)`
    justify-content: space-between;
    user-select: none;
`;
const ProjectCardBack = styled(ProjectCardShared)`
    justify-content: space-between;
    transform: rotateY(180deg);
    /* border: 2px solid rgba(0, 0, 0, 0.5); */
    /* border: 2px solid rgba(${(props) => props.theme.secondaryHex} 0.7); */
    box-shadow: 0px 0px 16px 2px rgba(${(props) => props.theme.primaryHex} 0.6);

    background-color: ${(props) => props.bgColor};
    cursor: default;
    h4 {
        font-size: 15px;
        user-select: none;
    }
    div {
        margin-bottom: 10px;
        p {
            font-size: 14px;
            user-select: none;
            margin-bottom: 5px;
        }
        a {
            /* display: inline-block; */
            /* min-height: 30px; */
            font-size: 13px;
            word-wrap: break-word;
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
`;

const IMG = styled.img`
    align-self: center;
    width: 200px;
    max-height: 120px;
    user-select: none;
`;
const projectContainerVar = {
    hidden: { opacity: 0, x: -200 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delayChildren: 0.24,
            staggerChildren: 0.12,
        },
    },
};

const projectCardVar = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
    },
};

const projectCardInnerVar = {
    hidden: {},
    show: {
        boxShadow: "-2px -2px 3px 0px rgba(0, 0, 0, 0.2)",
    },
    hover: {
        boxShadow: "-3px 3px 6px 2px rgba(0, 0, 0, 0.15)",
    },
};

const HomeProjects = () => {
    const [isFlipped, setIsFlipped] = useState({});
    const { isModalActive, projectList } = useGlobalStateContext();
    const [ref, inView] = useInView({ rootMargin: "-50% 0px -50% 0px" });

    const globalDispatch = useGlobalDispatchContext();

    const unFlip = useCallback(() => {
        const initializeFlipped = {};
        projectList.forEach((item, idx) => {
            initializeFlipped[idx] = false;
        });
        setIsFlipped(initializeFlipped);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        unFlip();
    }, [unFlip]);

    const handleReset = () => {
        unFlip();
        globalDispatch({
            type: "RESET_PROJECTLIST",
        });
    };

    const handleCardClick = (hasContent, title, idx) => {
        hasContent
            ? globalDispatch({
                  type: "TOGGLE_MODAL",
                  payload: title,
              })
            : setIsFlipped({
                  ...isFlipped,
                  [idx]: !isFlipped[idx],
              });
    };

    // console.log(isFlipped);
    return (
        <StyledHomeProjects id="projects">
            <Container>
                <Flex center column fullHeight>
                    <SectionHeader>Projects</SectionHeader>
                    {/* <HomeProjectsDetailed /> */}
                    <ProjectsContainer
                        initial="hidden"
                        animate={inView && "show"}
                        variants={projectContainerVar}
                        ref={ref}
                    >
                        <ProjectsOptions>
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: "12px",
                                }}
                            >
                                Memos
                            </p>
                            <AddProjectButton
                                onClick={() => {
                                    globalDispatch({
                                        type: "TOGGLE_MODAL",
                                        payload: "ADD_PROJECT",
                                    });
                                }}
                            ></AddProjectButton>
                            <div></div>
                            <ResetProjectButton
                                onClick={() => {
                                    handleReset();
                                }}
                            >
                                Reset
                            </ResetProjectButton>
                        </ProjectsOptions>
                        <ProjectsGrid>
                            {projectList.map(
                                (
                                    {
                                        title,
                                        bgColor,
                                        href,
                                        content,
                                        github,
                                        imgSrc,
                                        hasContent,
                                    },
                                    idx
                                ) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={
                                            !isModalActive && {
                                                scale: 1.04,
                                                rotate: -0.5,
                                                x: 7,
                                                y: -7,
                                            }
                                        }
                                    >
                                        <ProjectCard
                                            onClick={() =>
                                                handleCardClick(
                                                    hasContent,
                                                    title,
                                                    idx
                                                )
                                            }
                                            variants={projectCardVar}
                                            style={
                                                isModalActive === title
                                                    ? { zIndex: 10 }
                                                    : { zIndex: 1 }
                                            }
                                        >
                                            <ProjectCardInner
                                                variants={projectCardInnerVar}
                                                className={
                                                    isModalActive === title &&
                                                    hasContent
                                                        ? "rotate-into-content"
                                                        : isFlipped[idx]
                                                        ? "rotate"
                                                        : "rotate-back"
                                                }
                                            >
                                                <ProjectCardFront
                                                    style={{
                                                        backgroundColor:
                                                            bgColor,
                                                    }}
                                                >
                                                    <p className="content">
                                                        {content}
                                                    </p>
                                                    {imgSrc && (
                                                        <IMG
                                                            src={require(`../../assets/images/${imgSrc}`)}
                                                        />
                                                    )}
                                                    <h4 className="title">
                                                        {/* <a
                                                        href={github}
                                                        target="_blank"
                                                    > */}
                                                        {title}
                                                        {/* </a> */}
                                                    </h4>
                                                </ProjectCardFront>
                                                <ProjectCardBack
                                                    // style={{
                                                    //     backgroundColor: bgColor,
                                                    // }}
                                                    bgColor={bgColor}
                                                >
                                                    {!hasContent && (
                                                        <>
                                                            <div>
                                                                <div>
                                                                    <p>Site:</p>
                                                                    {href ? (
                                                                        <a
                                                                            href={
                                                                                href
                                                                            }
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                e.stopPropagation()
                                                                            }
                                                                        >
                                                                            {
                                                                                href
                                                                            }
                                                                        </a>
                                                                    ) : (
                                                                        <p>
                                                                            No
                                                                            site
                                                                            exists.
                                                                        </p>
                                                                    )}
                                                                </div>
                                                                {/* {imgSrc && (
                                                            <IMG
                                                                src={require(`../../assets/images/${imgSrc}`)}
                                                            />
                                                        )} */}
                                                                <div>
                                                                    <p>
                                                                        Github:
                                                                    </p>
                                                                    {github ? (
                                                                        <a
                                                                            href={
                                                                                github
                                                                            }
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                e.stopPropagation()
                                                                            }
                                                                        >
                                                                            {
                                                                                github
                                                                            }
                                                                        </a>
                                                                    ) : (
                                                                        <p>
                                                                            No
                                                                            github
                                                                            exists.
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <h4>{title}</h4>
                                                        </>
                                                    )}
                                                </ProjectCardBack>
                                            </ProjectCardInner>
                                        </ProjectCard>
                                    </motion.div>
                                )
                            )}
                            {/* <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject>
                    <Unproject whileHover={{ scale: 1.05 }}></Unproject> */}
                        </ProjectsGrid>
                    </ProjectsContainer>
                </Flex>
            </Container>
        </StyledHomeProjects>
    );
};

export default HomeProjects;
