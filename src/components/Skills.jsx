import { useSelector } from "react-redux";

export const Skills = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const skillData = data[0][0].skills;
  const headerData = data[0][0]["header"];
  const skills = skillData.map((skill, index) => {
    return (
      <div className="px-0">
        <div
          className="md:space-y-8 sm:space-y-8 md:w-full md:max-w-[300px] gap-10"
          key={index}
        >
          <h3 className="sm:space-y-8">{skill.title}</h3>
          <p>{skill.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="md:space-y-8 sm:space-y-8">
      <h2 className="font-semibold ">{headerData.title1}</h2>
      <div className="flex flex-wrap justify-between sm:space-y-8 md:space-y-0">
        {skills}
      </div>
    </div>
  );
};
