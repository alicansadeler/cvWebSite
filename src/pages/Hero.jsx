import { useSelector } from "react-redux";
import AcsIMG from "../assets/profilResmi/acs.png";

const Hero = () => {
  const data = useSelector((store) => store.data);
  const toggle = useSelector((store) => store.active);

  const [[{ hero }]] = data;

  return (
    <div>
      <h1>{hero.title}</h1>
      <p>{hero.text}</p>
      <img
        src={AcsIMG}
        alt="Profil Resmi"
        className="w-[29.75rem] h-[23.44rem] shadow-2xl rounded-2xl"
      />
    </div>
  );
};

export default Hero;
