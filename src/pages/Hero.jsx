import AcsIMG from "../assets/profilResmi/acs.jpeg";
const Hero = () => {
  return (
    <div>
      <img
        src={AcsIMG}
        alt="Profil Resmi"
        className="w-476 h-375 shadow-lg border-2 border-gray-300 border-solid rounded-md"
      />
    </div>
  );
};

export default Hero;
