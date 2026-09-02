import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const NAV_LINKS = [
  { href: "#home", key: "navHome" },
  { href: "#travels", key: "navTravels" },
  { href: "#esevai", key: "navEsevai" },
  { href: "#printing", key: "navPrinting" },
  { href: "#contact", key: "navContact" },
];

function LangSwitch({ lang, setLang, t }) {
  return (
    <div className="lang-switch" role="group" aria-label="Language switch">
      <button type="button" className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
        {t("langEnglish")}
      </button>
      <button type="button" className={lang === "ta" ? "active" : ""} onClick={() => setLang("ta")}>
        {t("langTamil")}
      </button>
    </div>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [navTop, setNavTop] = useState(64);

  useEffect(() => {
    function positionNav() {
      if (headerRef.current) setNavTop(headerRef.current.offsetHeight);
    }
    positionNav();
    window.addEventListener("resize", positionNav);
    return () => window.removeEventListener("resize", positionNav);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="Pooja Mobiles, home">
          <img
            src="/images/logo/pooja-mobiles-logo.png"
            alt="Pooja Mobiles logo"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span className="brand-text">
            <span className="brand-name">Pooja Mobiles</span>
            <span className="brand-sub">{t("brandSub")}</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LangSwitch lang={lang} setLang={setLang} t={t} />
          <button
            className="hamburger"
            aria-label={t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        id="mobileNav"
        className={`mobile-nav${menuOpen ? " open" : ""}`}
        style={{ top: navTop }}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {t(link.key)}
          </a>
        ))}
        <LangSwitch lang={lang} setLang={setLang} t={t} />
      </div>
    </header>
  );
}
