import { useSelector } from "react-redux";

export const Profile = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const profileData = data[0][0].profiles;

  return (
    <>
      <div>
        <h2 className="text-5xl font-semibold  text-left py-0">Profile</h2>
        <h2>{profileData.title1}</h2>
        <ul>
          {Object.entries(profileData.items[0].details).map(([key, value]) => (
            <li key={key}>
              {key} : {value}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>{profileData.title2}</h3>
        <p>{profileData.items[1].text}</p>
      </div>
    </>
  );
};
