import React from "react";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";

const StyledHeader = styled.nav``;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Flex></Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;
