import { useTranslation } from "react-i18next";
import content from "../data/content";

const Experience = () => {
  const { t } = useTranslation();
  const { experience } = content;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">
        {t("experience.title")}
      </h1>

      <div className="space-y-8">
        {experience.map((job, _) => (
          <div key={job.id} className="bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{job.position}</h2>
                <p className="text-lg text-gray-300">{job.company}</p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">{job.period}</p>
            </div>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold text-white mb-2">
              Key Achievements:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
