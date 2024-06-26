import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import { HashRouter } from "react-router-dom";
import "./index.css";
import 'react-app-polyfill/stable';

// import { Provider } from "react-redux";
// import store from "./store";
import App from "./App.js";

ReactDOM.render(
        <HashRouter>
            <ThemeProvider theme={theme}>
                <>
                    <App />
                    <GlobalStyles />
                </>
            </ThemeProvider>
        </HashRouter>,
    document.getElementById('root'))