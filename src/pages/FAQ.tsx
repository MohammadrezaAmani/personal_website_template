import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import content from "../data/content";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const { faq } = content;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faq.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {t("faq.title")}
      </h1>

      {/* Search */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={t("faq.searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* FAQ list */}
      <div className="space-y-4">
        {filteredFAQs.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300">
            {t("common.noResults")}
          </p>
        ) : (
          filteredFAQs.map((item) => (
            <Disclosure key={item.id}>
              {({ open }) => (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <Disclosure.Button className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                          open ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQ;
