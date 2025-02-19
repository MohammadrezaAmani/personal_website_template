import { useTranslation } from "react-i18next";
import content from "../data/content";

const Education = () => {
  const { t } = useTranslation();
  const { education } = content;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t("education.title")}
      </h1>

      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {edu.institution}
                </p>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                {edu.period}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
