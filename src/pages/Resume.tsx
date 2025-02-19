import { useTranslation } from "react-i18next";
import content from "../data/content";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
  const { t } = useTranslation();
  const { about, experience, education } = content;

  const downloadResume = async () => {
    const element = document.getElementById("resume");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {t("resume.title")}
        </h1>
        <button
          onClick={downloadResume}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Download className="h-5 w-5 mr-2" />
          {t("resume.download")}
        </button>
      </div>

      <div id="resume" className="space-y-6">
        <header className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">{about.name}</h2>
          <p className="text-lg text-gray-600">{about.title}</p>
          <p className="text-gray-500 mt-2">{about.bio}</p>
        </header>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {t("resume.experience")}
          </h3>
          <div className="space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="border-b pb-3">
                <h4 className="text-lg font-medium text-gray-900">
                  {job.position}
                </h4>
                <p className="text-gray-600">
                  {job.company} ({job.period})
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {t("resume.education")}
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-b pb-3">
                <h4 className="text-lg font-medium text-gray-900">
                  {edu.degree}
                </h4>
                <p className="text-gray-600">
                  {edu.institution} ({edu.period})
                </p>
                <p className="text-gray-500 mt-1">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {t("resume.skills")}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {about.skills.map(({ category, technologies }, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-900">{category}</h4>
                <ul className="text-gray-600 mt-1">
                  {technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
