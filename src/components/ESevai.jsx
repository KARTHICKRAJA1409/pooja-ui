import { useLanguage } from "../context/LanguageContext.jsx";
import ImageWithFallback from "./ImageWithFallback.jsx";
import CtaBanner from "./CtaBanner.jsx";

const CERTIFICATES = [
  { titleKey: "certNativeTitle", descKey: "certNativeDesc" },
  { titleKey: "certCommunityTitle", descKey: "certCommunityDesc" },
  { titleKey: "certLegalHeirTitle", descKey: "certLegalHeirDesc" },
  { titleKey: "certIncomeTitle", descKey: "certIncomeDesc" },
  { titleKey: "certResidenceTitle", descKey: "certResidenceDesc" },
  { titleKey: "certOtherTitle", descKey: "certOtherDesc" },
];

export default function ESevai() {
  const { t } = useLanguage();

  return (
    <section id="esevai" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow" style={{ color: "var(--blue)" }}>{t("esevaiEyebrow")}</span>
          <h2>{t("esevaiHeading")}</h2>
        </div>

        <div className="esevai-intro">
          <div>
            <span className="badge">✔ <span>{t("esevaiBadge")}</span></span>
            <p>{t("esevaiIntro")}</p>
          </div>
          <div className="esevai-media">
            <ImageWithFallback
              src="/images/eseva/eseva-center.jpg"
              alt="Pooja Mobiles E-Sevai centre"
              icon="📄"
            />
          </div>
        </div>

        <div className="card-grid cols-4" style={{ marginTop: 34 }}>
          {CERTIFICATES.map((cert) => (
            <div className="cert-card" key={cert.titleKey}>
              <h3>{t(cert.titleKey)}</h3>
              <p>{t(cert.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="info-box">
          <strong>{t("infoNote")}</strong>
          <span>{t("infoText")}</span>
        </div>

        <CtaBanner
          title={t("esevaiCtaTitle")}
          text={t("esevaiCtaText")}
          buttonLabel={t("callNow")}
          variant="blue"
        />
      </div>
    </section>
  );
}
