import { useLanguage } from "../context/LanguageContext.jsx";

const FOOTER_LINKS = [
  { href: "#home", key: "navHome" },
  { href: "#travels", key: "navTravels" },
  { href: "#esevai", key: "navEsevai" },
  { href: "#printing", key: "navPrinting" },
  { href: "#contact", key: "navContact" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer">
      <div className="container footer-grid">
        <div>
          <h3>Pooja Mobiles</h3>
          <p className="footer-sub">{t("footerTagline")}</p>
          <p style={{ fontSize: ".88rem", maxWidth: "40ch" }}>{t("footerAbout")}</p>
        </div>

        <nav aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{t(link.key)}</a>
          ))}
        </nav>

        <div className="footer-contact">
          <p>{t("heroLocation")}</p>
          <p><a href="tel:9600372621">📞 9600372621</a></p>
          <p><a href="mailto:poojamobiles@gmail.com">✉️ poojamobiles@gmail.com</a></p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{t("footerCopyright")}</span>
      </div>
    </footer>
  );
}
