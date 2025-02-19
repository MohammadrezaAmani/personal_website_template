import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import content from "../data/content";

const Blog = () => {
  const { t } = useTranslation();
  const { blog } = content;
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blog.flatMap((post) => post.tags)));
  const filteredPosts = selectedTag
    ? blog.filter((post) => post.tags.includes(selectedTag))
    : blog;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t("blog.latest")}
      </h1>

      {/* Tags filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {t("blog.tags")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog posts */}
      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("common.readMore")} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
