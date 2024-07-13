import { useSelector } from "react-redux";
import AcsIMG from "../assets/profilResmi/acs.png";
import github from "../assets/logo/github.png";
import linkedn from "../assets/logo/LinkedIn.png";

const Hero = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const heroData = data[0][0].hero;

  return (
    <div className="space-y-8">
      <div className="flex items-center  h-[45px] py-0">
        <hr className="w-[6vw]   border-custom-isim bg-custom-isim" />
        <span className="px-3  text-custom-link font-semibold dark:text-custom-dark-h3">
          Ali Can Sadeler
        </span>
      </div>
      <section className="flex flex-wrap-reverse justify-between w-full sm:flex sm:flex-row sm:items-center">
        <div className="font-bold drop-shadow-xl  lg:text-left  w-[37.25rem] ">
          <h1 className="text-[4.5rem]">
            <span className="inline-block dark:text-custom-title">
              {heroData.title1}
            </span>
            <br />
            <span className="inline-block dark:text-custom-title">
              {heroData.title2}
            </span>
          </h1>

          <p className="text-lg font-normal drop-shadow-none leading-7 my-14 sm:text-center lg:text-left">
            {heroData.text}
          </p>
          <div className="text-custom-link text-lg  font-normal flex  items-start flex-wrap">
            <a
              href=""
              className="text-white px-8 py-2.5 rounded bg-custom-link border-2 border-custom-link mr-3"
            >
              Hire me{" "}
            </a>
            <a
              href="https://github.com/alicansadeler"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5  rounded border-2 border-custom-link mr-3"
            >
              <img
                src={github}
                alt="github"
                className="inline-block mr-2 text-center"
              />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/acsadeler/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2.5 border-2 border-custom-link rounded"
            >
              <img
                src={linkedn}
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
          className="xl:w-[29.75rem] xl:h-[23.45rem] md:w-[29.75rem] md:h-[23.45rem] shadow-2xl rounded-2xl border-1 border-black self-end"
        />
      </section>
    </div>
  );
};

export default Hero;
