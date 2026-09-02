# Image Folder Guide — Pooja Mobiles Website

Add your real photos into these folders using the exact filenames referenced in the code.
Until a file is added, the site automatically shows a neat placeholder card instead of a broken image icon.

- images/logo/pooja-mobiles-logo.png
- images/travels/*.jpg — see the `image` field of each entry in `src/data/busOperators.js`
- images/eseva/eseva-center.jpg
- images/printing/invitations/house-warming/invitation-01.jpg (...02, 03, 04)
- images/printing/invitations/wedding/invitation-01.jpg (...02, 03, 04)
- images/printing/invitations/puberty/invitation-01.jpg (...02, 03, 04)

Tips:
- Use .jpg for photos, .png for the logo (transparent background works best).
- Keep photos under ~500KB each so the site stays fast.
- Recommended invitation image size: roughly 900x1200px (portrait, 3:4).
- To add/remove bus operators, edit `src/data/busOperators.js`.
- To edit invitation prices, update `priceLabel` in `src/data/translations.js`
  (or extend each product in `src/data/invitationProducts.js` with its own `price`).
