import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

export const Profile = () => {
  const data = useSelector((store) => store.data);

  if (data.length === 0 || !data[0] || !data[0][0]) {
    return <LoadingSpinner />;
  }

  const profileData = data[0][0].profiles;

  return (
    <div className="space-y-8 py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <h2 className="font-semibold text-2xl md:text-3xl mb-8 text-left dark:text-white">
        {profileData.title1}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            {profileData.title1}
          </h3>
          <ul className="space-y-4 dark:text-custom-paragraf">
            {Object.entries(profileData.items[0].details).map(
              ([key, value]) => (
                <li
                  key={key}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <div className="font-semibold text-lg sm:w-1/3 dark:text-gray-300">
                    {key}
                  </div>
                  <div className="flex-1 text-gray-600 dark:text-gray-400">
                    {value}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            {profileData.title2}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {profileData.items[1].text}
          </p>
        </div>
      </div>
    </div>
  );
};
