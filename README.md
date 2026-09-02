# Pooja Mobiles — React Website

A bilingual (English / தமிழ்) single-page website for Pooja Mobiles
(Travels Ticket Booking, E-Sevai Services, Printing Services),
built with React + JavaScript (Vite).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview   # preview the production build locally
```

The build output goes to `dist/` — upload that folder's contents to any
static host (Netlify, Vercel, GitHub Pages, or a normal web server).

## Project structure

```
public/
  images/              ← add your real photos here (see images/README.md)
src/
  components/          ← one component per section (Header, Hero, Travels, ...)
  context/
    LanguageContext.jsx ← language state + t() translation helper, persisted in localStorage
    LightboxContext.jsx ← shared image-preview modal
  data/
    translations.js     ← every piece of UI text, in English and Tamil
    busOperators.js      ← bus operator cards shown in the Travels section
    invitationProducts.js← invitation designs shown in the Printing section
  App.jsx
  main.jsx
  index.css             ← all styling (design tokens + component styles)
index.html
```

## Common edits

- **Add or remove a bus operator:** edit `src/data/busOperators.js`.
- **Add or remove an invitation design:** edit `src/data/invitationProducts.js`.
- **Update invitation pricing:** the site currently shows a shared placeholder
  (`priceLabel` in `src/data/translations.js`, `₹XX / Piece`). Replace that
  string once real prices are available, or add a `price` field per item in
  `invitationProducts.js` and read it in `src/components/InvitationGallery.jsx`.
- **Update any text (English or Tamil):** everything lives in
  `src/data/translations.js`, keyed the same way in both languages.
- **Add real photos:** drop files into `public/images/...` using the exact
  paths referenced in the data files — see `public/images/README.md`.
- **Phone / email / address:** these are hard-coded in a few components
  (`Header.jsx`, `Hero.jsx`, `Contact.jsx`, `Footer.jsx`,
  `InvitationGallery.jsx`, `FloatingCall.jsx`) since they're used in `tel:`,
  `mailto:`, and `wa.me` links — search for `9600372621` to find every spot.

## Notes

- No CSS framework or component library is used — all styling is plain CSS
  in `src/index.css`, using CSS custom properties for the color palette.
- Language selection is stored in `localStorage` under the key
  `poojaMobilesLang`, so it persists across page reloads (default: English).
- Any image that fails to load automatically falls back to a placeholder
  card instead of a broken-image icon (see `ImageWithFallback.jsx`).
