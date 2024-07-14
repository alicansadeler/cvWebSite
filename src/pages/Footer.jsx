import { useSelector } from "react-redux";
import ok from "../assets/logo/okk.png";
const Footer = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const footerData = data[0][0].footer;

  return (
    <footer className="md:py-20 sm:py-10 flex justify-center  bg-custom-footer dark:absolute dark:left-0 dark:flex dark:justify-center md:w-[1440px] dark:max-w-none">
      <div className="flex flex-col  items-start md:space-y-20 sm:space-y-10 w-full max-w-[1140px] ">
        <h4 className="font-semibold md:text-[2.5rem] sm:text-[2rem] md:w-[540px] sm:w-full text-left dark:text-custom-title">
          {footerData.text}
        </h4>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:max-w-[1140px]">
          <div className="flex items-center gap-2">
            <img src={ok} alt="ok" className="w-6 h-6" />
            <p className="font-normal underline bg-custom-footer text-custom-mail text-[1.2rem] dark:text-custom-dark-email dark:bg-custom-dark-footer">
              alicansadeler@gmail.com
            </p>
          </div>
          <div className="w-full max-w-[300px] h-auto flex justify-around text-[1.125rem] md:mt-0 sm:mt-10">
            <a
              href=""
              className="text-custom-personal dark:text-custom-dark-personal"
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.text2}
            </a>
            <a
              href="https://github.com/alicansadeler"
              className="text-custom-github dark:text-custom-dark-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/acsadeler/"
              className="text-custom-linkedin dark:text-custom-dark-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
