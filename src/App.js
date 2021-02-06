import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
        <NavTabs />
        <Route exact path="/samer-saadoun" component={Home} />
        <Route exact path="/samer-saadoun/about" component={Home} />
        <Route exact path="/samer-saadoun/contact" component={Contact} />
        <Route exact path="/samer-saadoun/projects" component={Projects} />
    </Router>
    <Footer />
    </>
  );
}

export default App;
