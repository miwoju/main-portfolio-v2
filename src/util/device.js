const size = {
    s: "1024px",
    m: "1216px",
    l: "1408px",
};

export const device = {
    small: `(max-width: ${size.s})`,
    medium: `(max-width: ${size.m})`,
    large: `(max-width: ${size.l})`,
    // @media (min-width: 1024px) {
    //     max-width: 960px;
    // }
    // @media (min-width: 1216px) {
    //     max-width: 1152px;
    // }
    // @media (min-width: 1408px) {
    //     max-width: 1244px;
    // }
};
