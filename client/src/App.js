import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/contact" component={Contact}>
          <Contact />
        </Route>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
