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
    <div className="space-y-8 ">
      <div className="flex items-center  h-[45px] py-0">
        <hr className="w-[6vw]   border-custom-isim bg-custom-isim" />
        <span className="px-3  text-custom-link font-semibold dark:text-custom-dark-h3">
          Ali Can Sadeler
        </span>
      </div>
      <section className="flex flex-wrap-reverse justify-between w-full sm:flex sm:flex-row sm:items-center">
        <div className="font-bold drop-shadow-xl  lg:text-left  w-[37.25rem] ">
          <h1>
            <span className="inline-block dark:text-custom-title">
              {heroData.title1}
            </span>
            <br />
            <span className="inline-block dark:text-custom-title">
              {heroData.title2}
            </span>
          </h1>

          <p className="text-[1.125rem] font-normal drop-shadow-none leading-7 my-14 sm:text-left lg:text-left">
            {heroData.text}
          </p>
          <div className="text-custom-link text-[1.125rem]  font-normal flex  items-start flex-wrap">
            <a
              href=""
              className="text-white px-8 py-2.5 sm:hidden md:block rounded bg-custom-link border-1 border-custom-link mr-3 dark:bg-custom-dark-personal dark:border-custom-dark-personal dark:!text-custom-dark-footer"
            >
              Hire me{" "}
            </a>
            <a
              href="https://github.com/alicansadeler"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-[8px] dark:bg-custom-dark-heroButton rounded border-1 border-custom-link mr-3 dark:border-custom-dark-personal dark:text-custom-dark-personal"
            >
              <img
                src={toggle ? github : darkGit}
                alt="github"
                className="inline-block mr-2 text-center"
              />{" "}
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/acsadeler/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-[9px] dark:bg-custom-dark-heroButton border-1 border-custom-link rounded dark:border-custom-dark-personal dark:text-custom-dark-personal"
            >
              <img
                src={toggle ? linkedn : darkLink}
                alt="linkedn"
                className="inline-block mr-2 text-center"
              />
              Linkedin
            </a>
          </div>
        </div>

        <img
          src={AcsIMG}
          alt="Profil Resmi"
          className="xl:w-[29.75rem] xl:h-[23.45rem] md:w-[29.75rem] md:h-[23.45rem] shadow-2xl md:rounded-2xl sm:rounded-none border-1 border-black self-end"
        />
      </section>
    </div>
  );
};

export default Hero;
