import { useTranslation } from "react-i18next";
import content from "../data/content";

const About = () => {
  const { t } = useTranslation();
  const { about } = content;

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="text-center mb-14">
        <img
          src={about.image}
          alt={about.name}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-5 shadow-xl object-cover"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {about.name}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          {about.title}
        </p>
        <div className="flex justify-center space-x-5 mt-5">
          {about.social.map(({ url, icon: Icon }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {about.bio}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.skills")}
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            {about.skills.map(
              ({ category, icon: Icon, technologies }, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {category}:
                    </span>
                  </div>
                  <span className="text-gray-900 dark:text-white">
                    {technologies.join("\n, ")}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t("about.interests")}
        </h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
          {about.interests.map((interest, index) => (
            <li key={index} className="border-b pb-2">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
