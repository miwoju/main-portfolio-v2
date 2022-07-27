import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import home from "./pages/Home";
import notfound from "./pages/notfound";
//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
//Components
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import { useGlobalStateContext } from "./components/context/globalContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { GlobalProvider } from "./components/context/globalContext";

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  /* cursor: none; */
}
html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
}
body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
  color: ${(props) => props.theme.text};
  overflow: ${(props) => (props.isModalActive ? "hidden" : "auto")};
  /**My Custom */
  /**width: 100vw;
  overflow-x: hidden; **/
  a {
    color: ${(props) => props.theme.secondary};
    
  }
}
`;

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // https://coolors.co/palette/ff99c8-fcf6bd-d0f4de-a9def9-e4c1f9
    // { title: "about", img: selfie, bgColor: "#fcf6bd" },
    // { title: "projects", img: projectImg, bgColor: "#b2f7ef" },
    // { title: "contact", bgColor: "#f7d6e0" },

    const { isModalActive } = useGlobalStateContext();
    // const darkTheme = {};
    const lightTheme = {
        //Blue
        // primary: "#1be7ff",
        primary: "#b2f7ef",
        primaryHex: "27, 231, 255,",
        //Red
        secondary: "#fd5b78",
        secondaryHex: "253, 91, 120,",
        background: "#edf6f9",
        // backgroundSecondary: "#006d77",
        text: "#504f54",
        textInverse: "#fff",
        textLight: "#616161",
        textStrong: "#4a4a4a",
        boxShadowClose: "1px 1px 3px rgba(0, 0, 0, 0.6)",
        boxShadowFar: "1px 1px 12px rgba(0, 0, 0, 0.4)",
    };
    return (
        <HelmetProvider>
            <ThemeProvider theme={lightTheme}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Miwoju's Portfolio</title>
                    <link rel="canonical" href="https://thekima.com/" />
                    <meta
                        name="description"
                        content="Miwoju's Portfolio in 2022"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        href="favicon.ico"
                        sizes="16x16"
                    />
                </Helmet>
                <GlobalStyle isModalActive={isModalActive} />
                <Router>
                    <Header
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                    />
                    <Navigation
                        toggleMenu={toggleMenu}
                        setToggleMenu={setToggleMenu}
                    />
                    <Switch>
                        <Route exact path="/" component={home} />
                        <Route exact path="/notfound" component={notfound} />
                    </Switch>
                    <Footer />
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
