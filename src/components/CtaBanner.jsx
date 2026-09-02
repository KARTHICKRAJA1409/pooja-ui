export default function CtaBanner({ title, text, buttonLabel, variant }) {
  return (
    <div className={`cta-banner${variant ? ` ${variant}` : ""}`}>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a href="tel:9600372621" className="btn btn-primary">{buttonLabel}</a>
    </div>
  );
}
