import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useLightbox } from "../context/LightboxContext.jsx";
import ImageWithFallback from "./ImageWithFallback.jsx";
import invitationProducts, { invitationCategories } from "../data/invitationProducts.js";

const CATEGORY_LABEL_KEYS = {
  houseWarming: "tabHouseWarming",
  wedding: "tabWedding",
  puberty: "tabPuberty",
};

const WHATSAPP_NUMBER = "919600372621";

export default function InvitationGallery() {
  const { t, lang } = useLanguage();
  const { openLightbox } = useLightbox();
  const [activeCategory, setActiveCategory] = useState("houseWarming");

  const items = invitationProducts[activeCategory] || [];

  return (
    <div className="invitation-panel">
      <div className="section-head" style={{ marginBottom: 22 }}>
        <h3 style={{ fontSize: "1.4rem" }}>{t("invitationPanelHeading")}</h3>
        <p style={{ margin: 0 }}>{t("invitationPanelSubtext")}</p>
      </div>

      <div className="invite-tabs" role="tablist" aria-label="Invitation categories">
        {invitationCategories.map((category) => (
          <button
            key={category}
            className={`invite-tab${activeCategory === category ? " active" : ""}`}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {t(CATEGORY_LABEL_KEYS[category])}
          </button>
        ))}
      </div>

      <div className="invite-grid" aria-live="polite">
        {items.map((item) => {
          const name = lang === "ta" ? item.nameTa : item.nameEn;
          const waMessage = t("whatsappMessage", lang === "ta" ? item.nameTa : item.nameEn);
          const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

          return (
            <article className="invite-card" key={item.id}>
              <div className="invite-media">
                <ImageWithFallback
                  src={item.image}
                  alt={name}
                  icon="🎉"
                  onClick={(e) => {
                    // Only open the lightbox when a real image is showing
                    // (ImageWithFallback swaps in a placeholder <div> on error).
                    if (e.currentTarget.tagName === "IMG") {
                      openLightbox(item.image, name);
                    }
                  }}
                />
              </div>
              <div className="invite-body">
                <span className="name">{name}</span>
                <span className="price">{t("priceLabel")}</span>
                <a className="btn btn-maroon btn-sm btn-block" target="_blank" rel="noopener noreferrer" href={waLink}>
                  {t("enquireNow")}
                </a>
                <a className="btn btn-ghost btn-sm btn-block" href="tel:9600372621">
                  {t("callNow")}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
