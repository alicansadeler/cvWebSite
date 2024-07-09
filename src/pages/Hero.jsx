import AcsIMG from "../assets/profilResmi/acs.png";
const Hero = () => {
  return (
    <div>
      <img
        src={AcsIMG}
        alt="Profil Resmi"
        className="w-[29.75rem] h-[23.44rem] shadow-2xl rounded-2xl"
      />
    </div>
  );
};

export default Hero;
