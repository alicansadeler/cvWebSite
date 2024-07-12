import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { getDataEuAPI, getDataTrAPI } from "./store/actions/action";
import { useEffect } from "react";
import { Toogle } from "./pages/Toogle.jsx";
import { Skills } from "./components/Skills.jsx";
import { Profile } from "./components/Profile.jsx";
import { useDispatch, useSelector } from "react-redux";

import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const toggle = useSelector((store) => store.active);
  const loading = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggle === false) {
      dispatch(getDataEuAPI());
    } else {
      dispatch(getDataTrAPI());
    }
  }, [dispatch, toggle]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <div className="app-container">
      <Toogle />
      <Header />
      <Switch>
        <Route path="/profiles">
          <Profiles />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/" exact>
          <div className="my-0 space-y-10">
            <div className=" md:my-12 lg:my-32">
              <Hero />
            </div>

            <div className=" md:my-8 lg:my-8">
              <Skills />
            </div>
            <hr />
            <div className=" md:my-8 lg:my-8">
              <Profile />
            </div>
            <hr />
            <div className=" md:my-8 lg:my-8">
              <Projects />
            </div>
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
