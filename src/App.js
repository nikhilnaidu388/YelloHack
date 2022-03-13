import { useState } from "react";
import "./App.css";
import Api from "./Screens/Api";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./themes.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";

function App() {
  const [theme, settheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? settheme("dark") : settheme("light");
  };
  return (
    <Container className="outerDiv" style={{ display: "inline" }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />

        <div
          className="toggleDiv"
          onChange={() => {
            themeToggler();
          }}
        >
          <input type="checkbox" class="checkbox" id="checkbox" />
          <label for="checkbox" class="label">
            <div class="ball" />
          </label>
        </div>
        <Api />
      </ThemeProvider>
    </Container>
  );
}

export default App;
