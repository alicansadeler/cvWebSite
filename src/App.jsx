import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/profiles">
          <Profiles />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/" exact>
          <Hero />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
