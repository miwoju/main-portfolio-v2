import React from "react";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";

import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

import { device } from "../../util/device";

const StyledHeaderNav = styled.nav`
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99;
`;

const Logo = styled.div`
    font-size: 2.4rem;
    font-weight: 500;
    @media ${device.extraSmall} {
        font-size: 2rem;
    }
    a {
        color: ${(props) => props.theme.text};
    }
`;

const NavList = styled.ul`
    display: flex;
    /* background-color: red; */
    justify-content: space-between;
`;

const NavItem = styled(motion.li)`
    list-style-type: none;
    font-size: 1.8rem;
    text-transform: capitalize;
    position: relative;
    @media ${device.extraSmall} {
        font-size: 1.6rem;
        a {
            margin: 7px;
        }
    }
    a {
        padding: 10px;
        margin: 10px;
        @media ${device.extraSmall} {
            padding: 8px;
            margin: 8px;
        }
        &:hover {
            /* color: ${(props) => props.theme.text}; */
            /* color: #fff; */
            /* transition: all 0.4s ease-in-out; */
        }
    }
`;

const NavItemBackdrop = styled(motion.div)`
    background-color: ${(props) => props.theme.secondary};
    width: 90px;
    /* height: 40px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

const Header = () => {
    const navItemVar = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const navItemLink = {
        hover: {
            color: "#fff",
            transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
        },
    };

    const navItemBackdropVar = {
        hidden: { opacity: 0 },
        show: {
            opacity: 0,
            // width: 60
            height: 0,
        },
        hover: {
            // width: 110,
            height: 37,
            opacity: 1,
            // backgroundColor: "#fd5b78",
            transition: { delay: 0, duration: 0.4, ease: "easeOut" },
        },
        // hover: {
        //     height: "100%",
        //     rotate: 45,
        //     transition: { ease: "easeOut" },
        // },
    };
    return (
        <StyledHeaderNav>
            <Container>
                <Flex spaceBetween>
                    <Logo>
                        <a
                            href="https://thekima.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            The Kima
                        </a>
                    </Logo>
                    <NavList>
                        {/* <NavItem>
                            <a href="#intro">Home</a>
                        </NavItem> */}
                        <NavItem
                            initial="hidden"
                            animate="show"
                            variants={navItemVar}
                            whileHover="hover"
                        >
                            <motion.a
                                variants={navItemLink}
                                href="#about"
                                rel="noopener noreferrer"
                            >
                                about
                            </motion.a>
                            <NavItemBackdrop variants={navItemBackdropVar} />
                        </NavItem>
                        <NavItem
                            initial="hidden"
                            animate="show"
                            variants={navItemVar}
                            whileHover="hover"
                        >
                            <motion.a
                                variants={navItemLink}
                                href="#projects"
                                rel="noopener noreferrer"
                            >
                                projects
                            </motion.a>
                            <NavItemBackdrop variants={navItemBackdropVar} />
                        </NavItem>
                        <NavItem
                            initial="hidden"
                            animate="show"
                            variants={navItemVar}
                            whileHover="hover"
                        >
                            <motion.a
                                variants={navItemLink}
                                href="#contact"
                                rel="noopener noreferrer"
                            >
                                contact
                            </motion.a>
                            <NavItemBackdrop variants={navItemBackdropVar} />
                        </NavItem>
                    </NavList>
                </Flex>
            </Container>
        </StyledHeaderNav>
    );
};

export default Header;
