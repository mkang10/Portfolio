import { LanguageContext } from "@/src/app/context/LanguageContext";
import { useContext } from "react";

export default function LanguageButtons() {
  const { lang, toggleLang } = useContext(LanguageContext);

  return (
    <div className="inline-flex border rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => lang !== "vi" && toggleLang()}
        className={`px-4 py-2 text-sm font-medium transition ${
          lang === "vi"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        VI
      </button>
      <button
        onClick={() => lang !== "en" && toggleLang()}
        className={`px-4 py-2 text-sm font-medium transition ${
          lang === "en"
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
