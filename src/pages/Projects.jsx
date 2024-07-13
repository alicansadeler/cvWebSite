import AcsIMG from "../assets/projectsResim/Rectangle 41.png";
import AcsIMG2 from "../assets/projectsResim/Rectangle 42.png";
import AcsIMG3 from "../assets/projectsResim/Rectangle 43.png";
import { useSelector } from "react-redux";

export default function Projects() {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const projeData = data[0][0].projects;
  const technologies = ["react", "redux", "axios"];
  const resimler = {
    0: AcsIMG,
    1: AcsIMG2,
    2: AcsIMG3,
  };

  return (
    <div className="space-y-8">
      <h2 className="text-left">Projects</h2>
      <div className="flex flex-wrap justify-between w-full">
        {projeData.map((proje, index) => (
          <div key={index} className="max-w-sm   overflow-hidden w-80 ">
            <img
              className="w-full h-44 object-cover"
              src={resimler[index]}
              alt={proje.title}
            />
            <div className="py-2 ">
              {" "}
              <h3 className="text-[1.875rem]  font-normal mb-2 text-left text-custom-isim dark:text-custom-dark-projeTitle">
                {proje.title}
              </h3>
              <p className="text-gray-600  mb-4 text-left text-[0.875rem]">
                {proje.text}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[0.875rem] text-center w-full max-w-[85px] font-medium font-[Inter] rounded text-custom-isim border-1 border-custom-isim dark:bg-custom-dark-heroButton dark:border-custom-dark-projeTechno dark:text-custom-dark-projeTechno"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-[1rem]">
                <a
                  href="https://github.com/alicansadeler"
                  className="text-custom-isim underline px-0  dark:text-custom-paragraf "
                >
                  Github
                </a>
                <a className="text-custom-isim underline dark:text-custom-paragraf ">
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
