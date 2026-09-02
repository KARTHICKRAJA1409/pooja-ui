import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useLanguage } from "./LanguageContext.jsx";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const { t } = useLanguage();
  const [image, setImage] = useState(null); // { src, caption } | null

  const openLightbox = useCallback((src, caption) => setImage({ src, caption }), []);
  const closeLightbox = useCallback(() => setImage(null), []);

  useEffect(() => {
    if (!image) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [image, closeLightbox]);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <div className={`lightbox${image ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
        {image && (
          <>
            <button className="lightbox-close" aria-label={t("closeImagePreview")} onClick={closeLightbox}>
              ✕
            </button>
            <div className="lightbox-inner">
              <img src={image.src} alt={image.caption} />
              <div className="lightbox-caption">{image.caption}</div>
            </div>
          </>
        )}
      </div>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return ctx;
}
