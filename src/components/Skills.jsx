import { useSelector } from "react-redux";

const Skills = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const skillData = data[0][0].skills;
  console.log(skillData);

  const skills = skillData.map((skill, index) => {
    return (
      <div
        className="w-full md:w-1/4 p-4 bg-white shadow-md rounded-lg"
        key={index}
      >
        <h3>{skill.title}</h3>
        <p>{skill.text}</p>
      </div>
    );
  });
  return <div className="flex flex-wrap gap-6">{skills}</div>;
};

export default Skills;
