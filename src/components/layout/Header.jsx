import React from "react";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

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

    a {
        padding: 10px;
        margin: 10px;
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
