import { useContext, useState } from "react";
import { LanguageContext } from "@/src/app/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageDropdown() {
  const { lang, setLang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 rounded-md border hover:bg-gray-100"
      >
        <Globe className="w-4 h-4" />
        <span>{lang.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute mt-2 bg-white border shadow-md rounded-md z-10 w-24">
          <button
            className="block w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setLang("vi");
              setOpen(false);
            }}
          >
            🇻🇳 Tiếng Việt
          </button>
          <button
            className="block w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => {
              setLang("en");
              setOpen(false);
            }}
          >
            🇺🇸 English
          </button>
        </div>
      )}
    </div>
  );
}
