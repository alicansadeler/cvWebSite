import { useSelector } from "react-redux";
import ok from "../assets/logo/okk.png";
import LoadingSpinner from "../components/LoadingSpinner";

const Footer = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <LoadingSpinner />;
  }

  const footerData = data[0][0].footer;

  return (
    <footer className="w-full bg-custom-footer dark:bg-custom-dark-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="flex flex-col space-y-8 md:space-y-16">
          <h4 className="text-2xl md:text-[2.5rem] font-semibold max-w-xl text-gray-800 dark:text-custom-title">
            {footerData.text}
          </h4>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0 md:justify-between">
            <div className="flex items-center gap-2">
              <img src={ok} alt="ok" className="w-6 h-6 dark:invert" />
              <a
                href="mailto:alicansadeler@gmail.com"
                className="text-base md:text-lg font-normal underline text-custom-mail hover:opacity-80 dark:text-custom-dark-email transition-all"
              >
                alicansadeler@gmail.com
              </a>
            </div>

            <div className="flex gap-6 text-base md:text-lg">
              <a
                href=""
                className="text-custom-personal hover:opacity-80 dark:text-custom-dark-personal transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerData.text2}
              </a>
              <a
                href="https://github.com/alicansadeler"
                className="text-custom-github hover:opacity-80 dark:text-custom-dark-github transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/acsadeler/"
                className="text-custom-linkedin hover:opacity-80 dark:text-custom-dark-linkedin transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
