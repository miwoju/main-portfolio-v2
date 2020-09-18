import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import home from "./pages/home";
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
  /* cursor: none; */
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
}
body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overscroll-behavior: none;
}
`;

function App() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const darkTheme = {};
    const lightTheme = {};
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
                </Switch>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
