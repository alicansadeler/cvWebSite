import { useSelector } from "react-redux";
import AcsIMG from "../assets/profilResmi/acs.png";

const Hero = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const heroData = data[0][0].hero;

  return (
    <div>
      <h1>{heroData.title}</h1>
      <p>{heroData.text}</p>
      <img
        src={AcsIMG}
        alt="Profil Resmi"
        className="w-[29.75rem] h-[23.44rem] shadow-2xl rounded-2xl"
      />
    </div>
  );
};

export default Hero;
