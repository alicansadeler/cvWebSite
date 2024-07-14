import { useSelector } from "react-redux";

export const Profile = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <div>Yükleniyor...</div>;
  }

  const profileData = data[0][0].profiles;

  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-semibold text-left  py-0">
        {profileData.title1}
      </h2>
      <div className="md:flex  md:flex-row md:justify-between sm:flex-col">
        <div className="space-y-8 text-left">
          <h3>{profileData.title1}</h3>
          <ul className="flex flex-col w-full max-w-2xl dark:text-custom-paragraf">
            {Object.entries(profileData.items[0].details).map(
              ([key, value]) => (
                <li key={key} className="flex mb-0">
                  <div className="font-semibold text-[1.125rem] w-1/3 ">
                    {key}
                  </div>
                  <div className="p-0 flex-1 min-h-[40px] font-normal">
                    {value}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="space-y-8 w-[580px] text-left">
          <h3>{profileData.title2}</h3>
          <p>{profileData.items[1].text}</p>
        </div>
      </div>
    </div>
  );
};
