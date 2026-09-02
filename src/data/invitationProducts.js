// Invitation design catalog, grouped by category.
// `nameEn` / `nameTa` are used both for display and for the WhatsApp
// enquiry message, so keep them descriptive.
//
// NOTE: Actual prices are not set here — the UI shows a shared
// placeholder ("₹XX / Piece") from translations.js (`priceLabel`).
// Replace that once real prices are available, or extend each item
// below with its own `price` field and read it in InvitationGallery.

const invitationProducts = {
  houseWarming: [
    { id: "hw1", nameEn: "House Warming Invitation – Design 01", nameTa: "கிரகப்பிரவேசம் அழைப்பிதழ் – வடிவமைப்பு 01", image: "/images/printing/invitations/house-warming/invitation-01.jpg" },
    { id: "hw2", nameEn: "House Warming Invitation – Design 02", nameTa: "கிரகப்பிரவேசம் அழைப்பிதழ் – வடிவமைப்பு 02", image: "/images/printing/invitations/house-warming/invitation-02.jpg" },
    { id: "hw3", nameEn: "House Warming Invitation – Design 03", nameTa: "கிரகப்பிரவேசம் அழைப்பிதழ் – வடிவமைப்பு 03", image: "/images/printing/invitations/house-warming/invitation-03.jpg" },
    { id: "hw4", nameEn: "House Warming Invitation – Design 04", nameTa: "கிரகப்பிரவேசம் அழைப்பிதழ் – வடிவமைப்பு 04", image: "/images/printing/invitations/house-warming/invitation-04.jpg" },
  ],
  wedding: [
    { id: "wd1", nameEn: "Wedding Invitation – Design 01", nameTa: "திருமண அழைப்பிதழ் – வடிவமைப்பு 01", image: "/images/printing/invitations/wedding/invitation-01.jpg" },
    { id: "wd2", nameEn: "Wedding Invitation – Design 02", nameTa: "திருமண அழைப்பிதழ் – வடிவமைப்பு 02", image: "/images/printing/invitations/wedding/invitation-02.jpg" },
    { id: "wd3", nameEn: "Wedding Invitation – Design 03", nameTa: "திருமண அழைப்பிதழ் – வடிவமைப்பு 03", image: "/images/printing/invitations/wedding/invitation-03.jpg" },
    { id: "wd4", nameEn: "Wedding Invitation – Design 04", nameTa: "திருமண அழைப்பிதழ் – வடிவமைப்பு 04", image: "/images/printing/invitations/wedding/invitation-04.jpg" },
  ],
  puberty: [
    { id: "pb1", nameEn: "Puberty Ceremony Invitation – Design 01", nameTa: "பூப்புனித நீராட்டு விழா அழைப்பிதழ் – வடிவமைப்பு 01", image: "/images/printing/invitations/puberty/invitation-01.jpg" },
    { id: "pb2", nameEn: "Puberty Ceremony Invitation – Design 02", nameTa: "பூப்புனித நீராட்டு விழா அழைப்பிதழ் – வடிவமைப்பு 02", image: "/images/printing/invitations/puberty/invitation-02.jpg" },
    { id: "pb3", nameEn: "Puberty Ceremony Invitation – Design 03", nameTa: "பூப்புனித நீராட்டு விழா அழைப்பிதழ் – வடிவமைப்பு 03", image: "/images/printing/invitations/puberty/invitation-03.jpg" },
    { id: "pb4", nameEn: "Puberty Ceremony Invitation – Design 04", nameTa: "பூப்புனித நீராட்டு விழா அழைப்பிதழ் – வடிவமைப்பு 04", image: "/images/printing/invitations/puberty/invitation-04.jpg" },
  ],
};

export const invitationCategories = ["houseWarming", "wedding", "puberty"];

export default invitationProducts;
