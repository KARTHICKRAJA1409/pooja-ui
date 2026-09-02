import { useLanguage } from "../context/LanguageContext.jsx";
import CtaBanner from "./CtaBanner.jsx";
import InvitationGallery from "./InvitationGallery.jsx";

const CATEGORIES = [
  { icon: "🎉", titleKey: "catInvitationTitle", descKey: "catInvitationDesc" },
  { icon: "🧾", titleKey: "catBillBookTitle", descKey: "catBillBookDesc" },
  { icon: "📢", titleKey: "catNoticeTitle", descKey: "catNoticeDesc" },
  { icon: "🪪", titleKey: "catVisitingTitle", descKey: "catVisitingDesc" },
];

export default function Printing() {
  const { t } = useLanguage();

  return (
    <section id="printing" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{t("printingEyebrow")}</span>
          <h2>{t("printingHeading")}</h2>
          <p>{t("printingIntro")}</p>
        </div>

        <div className="card-grid cols-4 printing-cats">
          {CATEGORIES.map((cat) => (
            <div className="feature-card" key={cat.titleKey}>
              <span className="icon" aria-hidden="true">{cat.icon}</span>
              <h3>{t(cat.titleKey)}</h3>
              <p>{t(cat.descKey)}</p>
            </div>
          ))}
        </div>

        <InvitationGallery />

        <CtaBanner
          title={t("printingCtaTitle")}
          text={t("printingCtaText")}
          buttonLabel={t("callNow")}
        />
      </div>
    </section>
  );
}
