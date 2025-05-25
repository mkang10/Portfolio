import { useContext } from "react";
import { LanguageContext } from "@/src/app/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm font-medium ${lang === "vi" ? "text-gray-900" : "text-gray-400"}`}>VI</span>
      <button
        onClick={toggleLang}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
          lang === "vi" ? "bg-gray-300" : "bg-blue-600"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            lang === "vi" ? "translate-x-0" : "translate-x-6"
          }`}
        />
      </button>
      <span className={`text-sm font-medium ${lang === "en" ? "text-gray-900" : "text-gray-400"}`}>EN</span>
    </div>
  );
}
