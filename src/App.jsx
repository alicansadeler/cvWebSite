import { Route, Switch } from "react-router-dom";
import { getDataEuAPI, getDataTrAPI } from "./store/actions/action";
import { useEffect } from "react";
import { Toogle } from "./pages/Toogle.jsx";
import { Skills } from "./components/Skills.jsx";
import { Profile } from "./components/Profile.jsx";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import Contact from "./pages/Contact.jsx";
import Hero from "./pages/Hero.jsx";
import Profiles from "./pages/Profiles.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
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
    return (
      <div className="flex justify-center items-center h-screen">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center shrink px-4 md:px-6">
      <ToastContainer />
      <div>
        <div className="md:max-w-6xl mx-auto sm:w-[100vw]">
          <div className=" md:mb-6 sm:mb-0">
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
        <div className="mt-32 ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
