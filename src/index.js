import React from "react";
import { Location, Router } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import ReactDOM from "react-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavMain from "./Components/NavMain/NavMain";

const RouteContainer = posed.div({
  enter: { opacity: 1, transitionDuration: "100ms" /*beforeChildren: 100*/ },
  exit: { opacity: 0, transitionDuration: "100ms" }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>

        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

const App = () => (
  <>
    <NavBar />
    <PosedRouter>
      <Portfolio path="/portfolio" />
      <Home location path="/" />
      <About location path="/about" />
    </PosedRouter>
    <NavMain />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
