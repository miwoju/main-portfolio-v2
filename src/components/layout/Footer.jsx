import React from "react";
import { motion } from "framer-motion";
//Styled components
import styled from "styled-components";
import { Container, Flex } from "../../styles/globalStyles";
import { socialsList } from "../../assets/data/socialsList";

const FooterNav = styled.nav`
    height: 300px;
`;
const Socials = styled(motion.div)`
    font-size: 2.8rem;
    i {
        cursor: pointer;
        padding: 20px;
        &:hover {
            color: ${(props) => props.theme.secondary};
        }
    }
`;

const Copyright = styled.p`
    position: absolute;
    bottom: 20px;
    font-size: 1.4rem;
`;

const Footer = () => {
    const iconHover = {
        scale: 1.5,
    };

    return (
        <FooterNav>
            <Container>
                <Flex fullHeight column center>
                    <Socials>
                        {socialsList.map(
                            ({ href, fontAwesomeClassName }, idx) => (
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={idx}
                                >
                                    <motion.i
                                        whileHover={iconHover}
                                        className={fontAwesomeClassName}
                                    ></motion.i>
                                </a>
                            )
                        )}
                    </Socials>
                    <Copyright>
                        ©Copyright 2020 | Designed and Developed by Richard D
                        Shin
                    </Copyright>
                </Flex>
            </Container>
        </FooterNav>
    );
};

export default Footer;
