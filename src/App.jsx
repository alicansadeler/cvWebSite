import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import { MyContextProvider } from "./context/data.jsx";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <MyContextProvider>
      <Header />
      <Switch>
        <Route to="/" exact>
          <Hero />
        </Route>
        <Route to="/profiles">
          <Profiles />
        </Route>
        <Route to="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </MyContextProvider>
  );
}

export default App;
