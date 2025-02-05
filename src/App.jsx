import { Route, Switch } from "react-router-dom";
import { getDataEuAPI, getDataTrAPI } from "./store/actions/action";
import { useEffect } from "react";
import { Toogle } from "./pages/Toogle.jsx";
import { Skills } from "./components/Skills.jsx";
import { Profile } from "./components/Profile.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import Contact from "./pages/Contact.jsx";
import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const toggle = useSelector((store) => store.active);
  const loading = useSelector((store) => store.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggle) {
      dispatch(getDataTrAPI());
    } else {
      dispatch(getDataEuAPI());
    }
  }, [toggle]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4">
        <ToastContainer />
        <div>
          <div className="md:max-w-6xl mx-auto">
            <div className="md:mb-6 sm:mb-0">
              <Toogle />
              <Header />
            </div>

            <div className="md:my-8 space-y-10 sm:my-0">
              <Switch>
                <Route path="/profiles">
                  <Profiles />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/" exact>
                  <div className="mb-12 md:mb-32">
                    <Hero />
                  </div>

                  <div className="my-8">
                    <Skills />
                  </div>
                  <hr className="my-8" />
                  <div className="my-8">
                    <Profile />
                  </div>
                  <hr className="my-8" />
                  <div className="my-8">
                    <Projects />
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
