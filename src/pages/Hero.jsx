import { useSelector } from "react-redux";

import AcsIMG from "../assets/profilResmi/acs.png";
import github from "../assets/logo/github.png";
import linkedn from "../assets/logo/LinkedIn.png";

import darkLink from "../assets/darkmode/LinkedIn.png";
import darkGit from "../assets/darkmode/github.png";
import { useEffect } from "react";

const Hero = () => {
  const data = useSelector((store) => store.data);
  const toggle = useSelector((store) => store.mode);

  useEffect(() => {}, [toggle, data]);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const heroData = data[0][0].hero;

  return (
    <div className="space-y-8 py-8 md:py-12 px-4 md:px-8">
      <div className="flex items-center h-12 md:h-[45px]">
        <hr className="w-16 md:w-24 border-custom-isim bg-custom-isim hidden md:block" />
        <span className="px-3 text-custom-link font-semibold dark:text-custom-dark-h3 hidden md:block">
          Ali Can Sadeler
        </span>
      </div>

      <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center md:items-start">
        <div className="w-full md:w-[37.25rem] space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="block dark:text-custom-title mb-2">
              {heroData.title1}
            </span>
            <span className="block dark:text-custom-title">
              {heroData.title2}
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed dark:text-gray-300">
            {heroData.text}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href=""
              className="hidden md:inline-block px-8 py-2.5 bg-custom-link text-white rounded hover:bg-opacity-90 dark:bg-custom-dark-personal dark:border-custom-dark-personal dark:text-custom-dark-footer transition-colors"
            >
              Hire me
            </a>
            <a
              href="https://github.com/alicansadeler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-custom-link rounded hover:bg-custom-link hover:text-white transition-colors dark:border-custom-dark-personal dark:text-custom-dark-personal"
            >
              <img
                src={toggle ? github : darkGit}
                alt="github"
                className="w-5 h-5 mr-2"
              />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/acsadeler/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 border border-custom-link rounded hover:bg-custom-link hover:text-white transition-colors dark:border-custom-dark-personal dark:text-custom-dark-personal"
            >
              <img
                src={toggle ? linkedn : darkLink}
                alt="linkedn"
                className="w-5 h-5 mr-2"
              />
              Linkedin
            </a>
          </div>
        </div>

        <img
          src={AcsIMG}
          alt="Profil Resmi"
          className="w-full md:w-[29.75rem] h-auto rounded-2xl shadow-2xl border border-black"
        />
      </section>
    </div>
  );
};

export default Hero;
