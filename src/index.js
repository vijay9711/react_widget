import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
import App from "./App.js";

ReactDOM.render(
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <App />
                    <GlobalStyles />
                </>
            </ThemeProvider>
        </BrowserRouter>,
    document.getElementById('root'))