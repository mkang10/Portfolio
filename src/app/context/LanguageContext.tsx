"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "vi";

interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void; // 👈 Thêm toggle
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {}, // 👈 Placeholder
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Language | null;
    if (storedLang) {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleLang = () => {
    const newLang = lang === "en" ? "vi" : "en";
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
