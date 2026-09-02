import { useLanguage } from "../context/LanguageContext.jsx";
import ImageWithFallback from "./ImageWithFallback.jsx";
import CtaBanner from "./CtaBanner.jsx";
import busOperators from "../data/busOperators.js";

const FEATURES = [
  { icon: "🖥️", titleKey: "featOnlineTitle", descKey: "featOnlineDesc" },
  { icon: "🎟️", titleKey: "featDiscountTitle", descKey: "featDiscountDesc" },
  { icon: "👥", titleKey: "featGroupTitle", descKey: "featGroupDesc" },
  { icon: "🚏", titleKey: "featBusTitle", descKey: "featBusDesc" },
];

export default function Travels() {
  const { t } = useLanguage();

  return (
    <section id="travels" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t("travelsEyebrow")}</span>
          <h2>{t("travelsHeading")}</h2>
          <p>{t("travelsIntro")}</p>
        </div>

        <div className="card-grid cols-4">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.titleKey}>
              <span className="icon" aria-hidden="true">{f.icon}</span>
              <h3>{t(f.titleKey)}</h3>
              <p>{t(f.descKey)}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 50 }}>
          <h3>{t("operatorsHeading")}</h3>
          <p style={{ color: "var(--ink-soft)", maxWidth: "60ch" }}>{t("operatorsSubtext")}</p>

          {/* OPERATOR CARDS: add/remove entries in src/data/busOperators.js */}
          <div className="card-grid cols-4">
            {busOperators.map((op) => (
              <article className="operator-card" key={op.id}>
                <div className="operator-media">
                  <ImageWithFallback src={op.image} alt={`${op.name} bus`} icon="🚌" />
                </div>
                <div className="operator-body">
                  <h3>{op.name}</h3>
                  <p>{t(op.descKey)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <CtaBanner
          title={t("travelsCtaTitle")}
          text={t("travelsCtaText")}
          buttonLabel={t("callNow")}
        />
      </div>
    </section>
  );
}
