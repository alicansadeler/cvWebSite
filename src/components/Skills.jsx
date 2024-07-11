import { useSelector } from "react-redux";

export const Skills = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const skillData = data[0][0].skills;

  const skills = skillData.map((skill, index) => {
    return (
      <div
        className="w-full md:w-1/3 p-2 bg-white text-left space-y-8"
        key={index}
      >
        <h3>{skill.title}</h3>
        <p>{skill.text}</p>
      </div>
    );
  });
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-semibold  text-left py-0 ">Skills</h2>
      <div className="flex flex-wrap justify-between  py-0">{skills}</div>
    </div>
  );
};
