import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Briefcase, BookOpen } from "lucide-react";
import content from "../data/content";

const Home = () => {
  const { t } = useTranslation();
  const { about, projects, blog } = content;

  return (
    <div className="space-y-16 pb-16 mt-5">
      {/* Hero Section with Gradient Background */}
      <section className="relative -mt-8 px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-xl">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-16" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-white/30 rounded-full blur-xl animate-pulse" />
            <img
              src={about.image}
              alt={about.name}
              className="relative w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white/20 shadow-xl"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            {about.name}
          </h1>
          <p className="text-2xl text-white/90 mb-8 font-light">
            {about.title}
          </p>
          <p className="max-w-2xl mx-auto text-lg text-white/80 mb-10 leading-relaxed">
            {about.bio}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            {about.social.map(({ url, icon: Icon }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full text-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-transform">
            <Code className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {projects.length}+ Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Completed & Ongoing
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-transform">
            <Briefcase className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              8+ Years
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional Experience
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-1 transition-transform">
            <BookOpen className="h-10 w-10 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {blog.length}+ Articles
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Written & Published
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("projects.title")}
          </h2>
          <Link
            to="/projects"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image || ""}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  {t("projects.viewProject")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("blog.latest")}
          </h2>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
          >
            View All
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blog.slice(0, 2).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{post.tags[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
