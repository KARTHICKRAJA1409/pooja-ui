import { useLanguage } from "../context/LanguageContext.jsx";

const TABS = [
  { target: "#travels", icon: "🚌", titleKey: "tabTravelsTitle", descKey: "tabTravelsDesc" },
  { target: "#esevai", icon: "📄", titleKey: "tabEsevaiTitle", descKey: "tabEsevaiDesc" },
  { target: "#printing", icon: "🖨️", titleKey: "tabPrintingTitle", descKey: "tabPrintingDesc" },
];

export default function ServiceTabs() {
  const { t } = useLanguage();

  function goTo(target) {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="services" className="services-overview">
      <div className="container">
        <span className="eyebrow">{t("servicesEyebrow")}</span>
        <h2 style={{ color: "#fff", marginTop: 8 }}>{t("servicesHeading")}</h2>

        <div className="service-tabs">
          {TABS.map((tab) => (
            <button key={tab.target} className="service-tab" onClick={() => goTo(tab.target)}>
              <span className="icon" aria-hidden="true">{tab.icon}</span>
              <h3>{t(tab.titleKey)}</h3>
              <p>{t(tab.descKey)}</p>
              <span className="explore">{t("exploreService")}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
