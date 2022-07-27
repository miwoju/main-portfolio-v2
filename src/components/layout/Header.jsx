import React from "react";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

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

const NavItem = styled.li`
    list-style-type: none;
    font-size: 1.8rem;
    text-transform: capitalize;
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
            margin: 0px;
        }
        &:hover {
            /* color: ${(props) => props.theme.text}; */
            color: #fff;
            background-color: ${(props) => props.theme.secondary};
        }
    }
`;

const Header = () => {
    return (
        <StyledHeaderNav>
            <Container>
                <Flex spaceBetween>
                    <Logo>
                        <a href="https://thekima.com/" target="_blank">
                            The Kima
                        </a>
                    </Logo>
                    <NavList>
                        {/* <NavItem>
                            <a href="#intro">Home</a>
                        </NavItem> */}
                        <NavItem>
                            <a href="#about">about</a>
                        </NavItem>
                        <NavItem>
                            <a href="#projects">projects</a>
                        </NavItem>
                        <NavItem>
                            <a href="#contact">contact</a>
                        </NavItem>
                    </NavList>
                </Flex>
            </Container>
        </StyledHeaderNav>
    );
};

export default Header;
