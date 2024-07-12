import { useSelector } from "react-redux";
import ok from "../assets/logo/okk.png";
const Footer = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const footerData = data[0][0].footer;

  return (
    <footer className="p-20">
      <div className="flex flex-col items-start space-y-8  w-[1142px]">
        <h4 className="font-semibold text-[2.5rem] w-[540px] text-left">
          {footerData.text}
        </h4>
        <div className="flex items-center gap-2">
          <img src={ok} alt="ok" className="w-6 h-6" />{" "}
          {/* Resim boyutunu ayarlayabilirsiniz */}
          <p className="font-normal text-custom-mail text-[1.2rem]">
            alicansadeler@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
