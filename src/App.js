import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import home from "./pages/home";
import notfound from "./pages/notfound";
//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
//Components
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
}
`;

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const darkTheme = {};
    const lightTheme = {
        //Blue
        primary: "#1be7ff",
        primaryHex: "27, 231, 255,",
        //Red
        secondary: "#fd5b78",
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
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Router>
                <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
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
    );
}

export default App;
