import React, { Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";

import Aux from "./hoc/Aux";
// import Home from "./layout/Home/Home";
// import Portfolio from "./layout/Projects/Projects";
// import ItemPortfolio from "";
// import About from "./layout/About/About";
// import Contact from "./layout/Contact/Contact";
// import Admin from "./layout/Admin/Admin";
// import Login from "./layout/Login/Login";
// import Forgot from "./layout/Forgot/Forgot";
// import Nofound from "./layout/404/Nofound";

import Layout from "./layout/Layout";

const Home = React.lazy(() => import("./layout/Home/Home"));
const Portfolio = React.lazy(() => import("./layout/Projects/Projects"));
const About = React.lazy(() => import("./layout/About/About"));
const Contact = React.lazy(() => import("./layout/Contact/Contact"));
const Nofound = React.lazy(() => import("./layout/404/Nofound"));

const App = () => {
  return (
    <Aux>
      <Layout>
        <Switch>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          {/* <Route exact path="/portfolio/:id">
            <ItemPortfolio />
          </Route> */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/*">
            <Nofound />
          </Route>
          {/* </animated.div> */}
        </Switch>
      </Layout>
    </Aux>
  );
};

export default App;
