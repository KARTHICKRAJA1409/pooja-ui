import { useLanguage } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-tag">📍 <span>{t("heroLocation")}</span></span>
            <h1>Pooja Mobiles</h1>
            <p className="subtitle">{t("heroSubtitle")}</p>
            <p className="lead">{t("heroLead")}</p>

            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">{t("heroExplore")}</a>
              <a href="tel:9600372621" className="btn btn-outline">{t("heroCall")}</a>
            </div>
          </div>

          <div className="ticket-strip">
            <h3>{t("ticketCardTitle")}</h3>
            <div className="ticket-row">
              <span>{t("ticketTravel")}</span>
              <a href="#travels" className="btn btn-ghost btn-sm">{t("ticketBookNow")}</a>
            </div>
            <div className="ticket-row">
              <span>{t("ticketEsevai")}</span>
              <a href="#esevai" className="btn btn-ghost btn-sm">{t("ticketView")}</a>
            </div>
            <div className="ticket-row">
              <span>{t("ticketPrinting")}</span>
              <a href="#printing" className="btn btn-ghost btn-sm">{t("ticketView")}</a>
            </div>
          </div>
        </div>
      </section>
      <div className="perforation" aria-hidden="true"></div>
    </>
  );
}
