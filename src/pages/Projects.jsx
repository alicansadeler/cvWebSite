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
    <>
      <h2 className="text-5xl font-semibold  text-left py-0">Projects</h2>
      <div className="flex flex-wrap  w-full gap-20">
        {projeData.map((proje, index) => (
          <div key={index} className="max-w-sm bg-white  overflow-hidden w-80 ">
            <img
              className="w-full h-44 object-cover"
              src={resimler[index]}
              alt={proje.title}
            />
            <div className="py-10">
              {" "}
              <h3 className="text-xl font-semibold mb-2 text-left">
                {proje.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 text-left">
                {proje.text}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded text-[rgba(55,48,163,1)] border-2 border-[rgba(55,48,163,1)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <button className="text-[rgba(55,48,163,1)] bg-white underline px-0">
                  Github
                </button>
                <button className="text-[rgba(55,48,163,1)] bg-white underline ">
                  View Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
