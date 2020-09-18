import styled, { css } from "styled-components";

export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    position: relative;
    width: auto;
    height: 100%;
    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1408px) {
        max-width: 1244px;
    }
    ${(props) =>
        props.fluid &&
        css`
            padding: 0;
            margin: 0;
            background: red;
            max-width: 100% !important;
        `}
    ${(props) =>
        props.vh &&
        css`
            height: 100vh;
        `}
`;

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    ${(props) =>
        props.column &&
        css`
            flex-direction: column;
        `};
    ${(props) =>
        props.center &&
        css`
            justify-content: center;
        `};
    ${(props) =>
        props.spaceBetween &&
        css`
            justify-content: space-between;
        `};
    ${(props) =>
        props.flexEnd &&
        css`
            justify-content: flex-end;
        `};
    ${(props) =>
        props.alignTop &&
        css`
            align-items: flex-start;
        `};
    ${(props) =>
        props.fullHeight &&
        css`
            height: 100%;
        `};
    ${(props) =>
        props.noHeight &&
        css`
            height: 0;
        `};
`;
