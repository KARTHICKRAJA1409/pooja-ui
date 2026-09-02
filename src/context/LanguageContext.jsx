import { createContext, useContext, useState, useEffect, useCallback } from "react";
import translations from "../data/translations.js";

const STORAGE_KEY = "poojaMobilesLang";
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    return saved === "ta" ? "ta" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang === "ta" ? "ta" : "en";
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = useCallback(
    (key, ...args) => {
      const dict = translations[lang] || translations.en;
      const value = dict[key] ?? translations.en[key] ?? key;
      return typeof value === "function" ? value(...args) : value;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
