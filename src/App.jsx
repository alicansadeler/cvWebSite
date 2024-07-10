import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { getDataEuAPI, getDataTrAPI } from "./store/actions/action";
import { useEffect } from "react";

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
