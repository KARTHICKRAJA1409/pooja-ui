import { useLanguage } from "../context/LanguageContext.jsx";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Pooja+Mobiles+Keelaeral+Ettayapuram+Thoothukudi";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t("contactEyebrow")}</span>
          <h2>{t("contactHeading")}</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <span className="icon" aria-hidden="true">📞</span>
            <h3>{t("callUs")}</h3>
            <div className="detail"><a href="tel:9600372621">9600372621</a></div>
            <a href="tel:9600372621" className="btn btn-maroon btn-sm btn-block">{t("callNow")}</a>
          </div>

          <div className="contact-card">
            <span className="icon" aria-hidden="true">✉️</span>
            <h3>{t("emailUs")}</h3>
            <div className="detail"><a href="mailto:poojamobiles@gmail.com">poojamobiles@gmail.com</a></div>
            <a href="mailto:poojamobiles@gmail.com" className="btn btn-maroon btn-sm btn-block">{t("sendEmail")}</a>
          </div>

          <div className="contact-card">
            <span className="icon" aria-hidden="true">📍</span>
            <h3>{t("visitUs")}</h3>
            <div className="detail" style={{ fontWeight: 600, fontSize: ".92rem" }}>
              {t("heroLocation")}
            </div>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-maroon btn-sm btn-block">
              {t("getDirections")}
            </a>
          </div>
        </div>

        <div className="contact-address">
          <strong>Pooja Mobiles</strong>
          <span>{t("fullAddress")}</span>
        </div>
      </div>
    </section>
  );
}
