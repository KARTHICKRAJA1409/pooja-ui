import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

/**
 * Renders an <img>, and if it fails to load (e.g. the file hasn't been
 * added to /public/images yet) swaps in a neat placeholder card instead
 * of a broken-image icon.
 */
export default function ImageWithFallback({ src, alt, icon = "🖼️", onClick, className }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="img-fallback" onClick={onClick} role={onClick ? "button" : undefined}>
        <span className="icon" aria-hidden="true">{icon}</span>
        <span>{t("imageComingSoon")}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  );
}
