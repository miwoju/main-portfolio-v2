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
        color: ${props => props.theme.text};
    }
`;

const Header = () => {
    return (
        <StyledHeaderNav>
            <Container>
                <Flex spaceBetween>
                    <Logo>
                        <Link to="/">The Kima</Link>
                    </Logo>
                </Flex>
            </Container>
        </StyledHeaderNav>
    );
};

export default Header;
