import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/layout/Layout.js";
import Home from "./containers/Home/Home";
import TV from "./containers/TV/TV";
import About from "./containers/About/About";
import Project from "./containers/Project/Project";
import Contact from "./containers/Contact/Contant";
import FAQ from "./containers/FAQ/FAQ";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/tv" component={TV}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/Project" component={Project}></Route>
                <Route exact path="/Contact" component={Contact}></Route>

                <Route exact path="/faq" component={FAQ}></Route>
                <Redirect to="/"></Redirect>
            </Switch>
        </Layout>
    )
}
export default App;