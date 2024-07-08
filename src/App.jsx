import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route to="/" exact>
          <Hero />
        </Route>
        <Route to="/profiles" exact>
          <Profiles />
        </Route>
        <Route to="/projects" exact>
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
