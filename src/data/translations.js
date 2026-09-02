// Central bilingual (English / Tamil) text dictionary.
// Every visible string in the UI is looked up from here via the
// `t(key)` helper exposed by LanguageContext, so switching language
// updates the entire page at once.

const translations = {
  en: {
    // ---------- Brand / Nav ----------
    brandSub: "Travels • E-Sevai • Printing",
    navHome: "Home",
    navTravels: "Travels",
    navEsevai: "E-Sevai",
    navPrinting: "Printing",
    navContact: "Contact",
    langEnglish: "English",
    langTamil: "தமிழ்",
    openMenu: "Open menu",
    closeImagePreview: "Close image preview",

    // ---------- Hero ----------
    heroLocation: "Keelaeral, Ettayapuram Taluk, Thoothukudi – 628908",
    heroSubtitle: "Your Trusted Destination for Travels, E-Sevai & Printing Services",
    heroLead:
      "Convenient services for your travel, government certificate applications and printing needs — all under one roof.",
    heroExplore: "Explore Our Services",
    heroCall: "📞 Call 9600372621",
    ticketCardTitle: "Quick Enquiry Card",
    ticketTravel: "Travel Tickets",
    ticketBookNow: "Book Now",
    ticketEsevai: "E-Sevai Certificates",
    ticketView: "View",
    ticketPrinting: "Printing & Invitations",

    // ---------- Services overview ----------
    servicesEyebrow: "What We Offer",
    servicesHeading: "Three Services, One Trusted Shop",
    exploreService: "Explore Service →",
    tabTravelsTitle: "Travels Ticket Booking",
    tabTravelsDesc:
      "Book AC/Non-AC and Seater/Sleeper bus tickets with regular online prices, customer discounts and group booking offers.",
    tabEsevaiTitle: "E-Sevai Services",
    tabEsevaiDesc:
      "Government-authorized centre assisting customers with Native, Community, Legal Heir and other certificate applications.",
    tabPrintingTitle: "Printing Services",
    tabPrintingDesc:
      "Printing for invitations, bill books, notices and other personal/business requirements.",

    // ---------- Travels ----------
    travelsEyebrow: "Travels",
    travelsHeading: "Travels Ticket Booking",
    travelsIntro:
      "Book your bus tickets with ease at regular online ticket prices. Regular customers can enjoy exclusive discounts, while group bookings are eligible for special offers. Choose from AC / Non-AC and Seater / Sleeper travel options based on your preference.",
    featOnlineTitle: "Online Ticket Booking",
    featOnlineDesc: "Conveniently book your travel tickets through Pooja Mobiles without any hassle.",
    featDiscountTitle: "Regular Customer Discounts",
    featDiscountDesc: "Our regular customers can receive exclusive discounts on ticket bookings.",
    featGroupTitle: "Group Booking",
    featGroupDesc: "Special offers are available for group bookings — perfect for trips and functions.",
    featBusTitle: "Multiple Bus Options",
    featBusDesc: "Choose from AC, Non-AC, Seater and Sleeper buses based on your comfort.",
    operatorsHeading: "Popular Bus Operators",
    operatorsSubtext: "A few of the operators we regularly book with.",
    descRegular: "Regular AC & Non-AC services on popular routes.",
    descComfortable: "Comfortable Seater & Sleeper options available.",
    descLongDistance: "Long-distance AC sleeper coaches.",
    descFrequent: "Frequent departures across South India.",
    imageComingSoon: "Image coming soon",
    travelsCtaTitle: "Need help booking your ticket?",
    travelsCtaText: "Call Pooja Mobiles today: 9600372621",
    callNow: "Call Now",

    // ---------- E-Sevai ----------
    esevaiEyebrow: "E-Sevai",
    esevaiHeading: "E-Sevai Services",
    esevaiBadge: "Government-Authorized E-Sevai Centre",
    esevaiIntro:
      "We provide assistance for applying for various government certificates and citizen services, guiding you through the required steps at our centre.",
    certNativeTitle: "Native Certificate",
    certNativeDesc: "Assistance applying for a native/residency certificate.",
    certCommunityTitle: "Community Certificate",
    certCommunityDesc: "Assistance applying for a community certificate.",
    certLegalHeirTitle: "Legal Heir Certificate",
    certLegalHeirDesc: "Assistance applying for a legal heir certificate.",
    certIncomeTitle: "Income Certificate",
    certIncomeDesc: "Assistance applying for an income certificate.",
    certResidenceTitle: "Residence Certificate",
    certResidenceDesc: "Assistance applying for a residence certificate.",
    certOtherTitle: "Other Government Certificates",
    certOtherDesc: "Ask us about other citizen service certificates you may need.",
    infoNote: "Please note:",
    infoText:
      " Customers can visit the centre for assistance with government certificate applications and related E-Sevai services. Required documents and processing requirements may vary depending on the service.",
    esevaiCtaTitle: "Need help with a certificate application?",
    esevaiCtaText: "Visit Pooja Mobiles or call 9600372621.",

    // ---------- Printing ----------
    printingEyebrow: "Printing",
    printingHeading: "Printing Services",
    printingIntro: "Quality printing services for personal, business and special-event requirements.",
    catInvitationTitle: "Invitation Card Printing",
    catInvitationDesc: "Designs for house warming, wedding and puberty ceremony invitations.",
    catBillBookTitle: "Bill Book Printing",
    catBillBookDesc: "Custom bill books for shops and businesses.",
    catNoticeTitle: "Notice Printing",
    catNoticeDesc: "Notices for community, school and business announcements.",
    catVisitingTitle: "Visiting Cards",
    catVisitingDesc: "Professional visiting cards for individuals and businesses.",
    invitationPanelHeading: "Invitation Card Printing",
    invitationPanelSubtext:
      "Choose an invitation design based on your event. Prices below are placeholders — please enquire for the latest rates.",
    tabHouseWarming: "House Warming",
    tabWedding: "Wedding",
    tabPuberty: "Puberty Ceremony",
    printingCtaTitle: "Have a printing requirement?",
    printingCtaText: "Call or visit Pooja Mobiles — we're happy to help.",
    enquireNow: "Enquire Now",
    priceLabel: "₹XX / Piece",

    // ---------- Contact ----------
    contactEyebrow: "Contact",
    contactHeading: "Contact Pooja Mobiles",
    callUs: "Call Us",
    emailUs: "Email Us",
    sendEmail: "Send Email",
    visitUs: "Visit Us",
    getDirections: "Get Directions",
    fullAddress: "Keelaeral, Ettayapuram Taluk, Thoothukudi – 628908, Tamil Nadu, India",

    // ---------- Footer ----------
    footerTagline: "Travels • E-Sevai • Printing Services",
    footerAbout: "Your trusted local one-stop shop for travel tickets, government E-Sevai assistance and printing.",
    footerCopyright: "© 2026 Pooja Mobiles. All Rights Reserved.",

    // ---------- WhatsApp enquiry message ----------
    whatsappMessage: (itemName) =>
      `Hello Pooja Mobiles,\n\nI am interested in ${itemName}.\n\nPlease share the price and other details.`,
  },

  ta: {
    // ---------- Brand / Nav ----------
    brandSub: "டிராவல்ஸ் • இ-சேவை • பிரிண்டிங்",
    navHome: "முகப்பு",
    navTravels: "டிராவல்ஸ்",
    navEsevai: "இ-சேவை",
    navPrinting: "பிரிண்டிங்",
    navContact: "தொடர்பு",
    langEnglish: "English",
    langTamil: "தமிழ்",
    openMenu: "மெனுவைத் திறக்கவும்",
    closeImagePreview: "படத்தை மூடவும்",

    // ---------- Hero ----------
    heroLocation: "கீழஈரால், எட்டையாபுரம் தாலுகா, தூத்துக்குடி – 628908",
    heroSubtitle: "டிராவல்ஸ், இ-சேவை மற்றும் பிரிண்டிங் சேவைகளுக்கான நம்பகமான மையம்",
    heroLead:
      "உங்கள் பயணம், அரசு சான்றிதழ் விண்ணப்பங்கள் மற்றும் பிரிண்டிங் தேவைகளுக்கு வசதியான சேவைகள் — அனைத்தும் ஒரே கூரையின் கீழ்.",
    heroExplore: "எங்கள் சேவைகளைக் காண்க",
    heroCall: "📞 அழைக்கவும் 9600372621",
    ticketCardTitle: "விரைவு விசாரிப்பு அட்டை",
    ticketTravel: "பயண டிக்கெட்",
    ticketBookNow: "முன்பதிவு",
    ticketEsevai: "இ-சேவை சான்றிதழ்கள்",
    ticketView: "பார்க்க",
    ticketPrinting: "பிரிண்டிங் மற்றும் அழைப்பிதழ்கள்",

    // ---------- Services overview ----------
    servicesEyebrow: "நாங்கள் வழங்குவது",
    servicesHeading: "மூன்று சேவைகள், ஒரே நம்பகமான கடை",
    exploreService: "சேவையைக் காண்க →",
    tabTravelsTitle: "டிராவல்ஸ் டிக்கெட் முன்பதிவு",
    tabTravelsDesc:
      "வழக்கமான ஆன்லைன் விலையில் AC/Non-AC மற்றும் Seater/Sleeper பேருந்து டிக்கெட்டுகளை முன்பதிவு செய்யுங்கள். வழக்கமான வாடிக்கையாளர்களுக்கு தள்ளுபடி மற்றும் குழு முன்பதிவுக்கு சிறப்பு சலுகைகள்.",
    tabEsevaiTitle: "இ-சேவை சேவைகள்",
    tabEsevaiDesc:
      "இருப்பிடம், சமூகம், வாரிசு மற்றும் பிற சான்றிதழ் விண்ணப்பங்களுக்கு உதவும் அரசு அங்கீகரிக்கப்பட்ட மையம்.",
    tabPrintingTitle: "பிரிண்டிங் சேவைகள்",
    tabPrintingDesc: "அழைப்பிதழ்கள், பில் புக்குகள், அறிவிப்புகள் மற்றும் பிற தனிப்பட்ட/வணிகத் தேவைகளுக்கான பிரிண்டிங்.",

    // ---------- Travels ----------
    travelsEyebrow: "டிராவல்ஸ்",
    travelsHeading: "டிராவல்ஸ் டிக்கெட் முன்பதிவு",
    travelsIntro:
      "வழக்கமான ஆன்லைன் டிக்கெட் விலையில் உங்கள் பேருந்து டிக்கெட்டுகளை எளிதாக முன்பதிவு செய்யுங்கள். வழக்கமான வாடிக்கையாளர்கள் சிறப்பு தள்ளுபடிகளை பெறலாம், குழுவாக முன்பதிவு செய்பவர்களுக்கு சிறப்பு சலுகைகள் உண்டு. உங்கள் விருப்பப்படி AC / Non-AC மற்றும் Seater / Sleeper பயண வகைகளைத் தேர்வு செய்யலாம்.",
    featOnlineTitle: "ஆன்லைன் டிக்கெட் முன்பதிவு",
    featOnlineDesc: "எந்த சிரமமும் இன்றி பூஜா மொபைல்ஸ் மூலம் உங்கள் பயண டிக்கெட்டுகளை வசதியாக முன்பதிவு செய்யுங்கள்.",
    featDiscountTitle: "வழக்கமான வாடிக்கையாளர் தள்ளுபடி",
    featDiscountDesc: "எங்கள் வழக்கமான வாடிக்கையாளர்கள் டிக்கெட் முன்பதிவுகளில் சிறப்பு தள்ளுபடி பெறலாம்.",
    featGroupTitle: "குழு முன்பதிவு",
    featGroupDesc: "குழு முன்பதிவுகளுக்கு சிறப்பு சலுகைகள் உள்ளன — பயணங்கள் மற்றும் நிகழ்ச்சிகளுக்கு ஏற்றது.",
    featBusTitle: "பல பேருந்து வகைகள்",
    featBusDesc: "உங்கள் வசதிக்கேற்ப AC, Non-AC, Seater மற்றும் Sleeper பேருந்துகளில் தேர்வு செய்யலாம்.",
    operatorsHeading: "பிரபலமான பேருந்து நிறுவனங்கள்",
    operatorsSubtext: "நாங்கள் வழக்கமாக முன்பதிவு செய்யும் சில நிறுவனங்கள்.",
    descRegular: "பிரபலமான வழித்தடங்களில் வழக்கமான AC & Non-AC சேவைகள்.",
    descComfortable: "வசதியான Seater & Sleeper விருப்பங்கள் கிடைக்கும்.",
    descLongDistance: "நீண்ட தூர AC ஸ்லீப்பர் பேருந்துகள்.",
    descFrequent: "தென்னிந்தியா முழுவதும் அடிக்கடி புறப்படும் சேவைகள்.",
    imageComingSoon: "படம் விரைவில்",
    travelsCtaTitle: "உங்கள் டிக்கெட்டை முன்பதிவு செய்ய உதவி வேண்டுமா?",
    travelsCtaText: "இன்றே பூஜா மொபைல்ஸை அழைக்கவும்: 9600372621",
    callNow: "இப்போது அழைக்கவும்",

    // ---------- E-Sevai ----------
    esevaiEyebrow: "இ-சேவை",
    esevaiHeading: "இ-சேவை மையம்",
    esevaiBadge: "அரசு அங்கீகரிக்கப்பட்ட இ-சேவை மையம்",
    esevaiIntro:
      "பல்வேறு அரசு சான்றிதழ்கள் மற்றும் குடிமக்கள் சேவைகளுக்கு விண்ணப்பிக்க எங்கள் மையத்தில் தேவையான வழிகாட்டுதலுடன் உதவி வழங்குகிறோம்.",
    certNativeTitle: "இருப்பிடச் சான்றிதழ்",
    certNativeDesc: "இருப்பிடச் சான்றிதழுக்கு விண்ணப்பிக்க உதவி.",
    certCommunityTitle: "சமூகச் சான்றிதழ்",
    certCommunityDesc: "சமூகச் சான்றிதழுக்கு விண்ணப்பிக்க உதவி.",
    certLegalHeirTitle: "வாரிசுச் சான்றிதழ்",
    certLegalHeirDesc: "வாரிசுச் சான்றிதழுக்கு விண்ணப்பிக்க உதவி.",
    certIncomeTitle: "வருமானச் சான்றிதழ்",
    certIncomeDesc: "வருமானச் சான்றிதழுக்கு விண்ணப்பிக்க உதவி.",
    certResidenceTitle: "குடியிருப்புச் சான்றிதழ்",
    certResidenceDesc: "குடியிருப்புச் சான்றிதழுக்கு விண்ணப்பிக்க உதவி.",
    certOtherTitle: "பிற அரசு சான்றிதழ்கள்",
    certOtherDesc: "உங்களுக்குத் தேவையான பிற குடிமக்கள் சேவை சான்றிதழ்கள் பற்றி எங்களிடம் கேளுங்கள்.",
    infoNote: "தயவுசெய்து கவனிக்கவும்:",
    infoText:
      " அரசு சான்றிதழ் விண்ணப்பங்கள் மற்றும் தொடர்புடைய இ-சேவைகளுக்கு உதவி பெற வாடிக்கையாளர்கள் எங்கள் மையத்திற்கு நேரில் வரலாம். தேவையான ஆவணங்கள் மற்றும் செயலாக்க நடைமுறைகள் சேவையைப் பொறுத்து மாறுபடலாம்.",
    esevaiCtaTitle: "சான்றிதழ் விண்ணப்பத்திற்கு உதவி வேண்டுமா?",
    esevaiCtaText: "பூஜா மொபைல்ஸை நேரில் வருகை தரவும் அல்லது 9600372621 ஐ அழைக்கவும்.",

    // ---------- Printing ----------
    printingEyebrow: "பிரிண்டிங்",
    printingHeading: "பிரிண்டிங் சேவைகள்",
    printingIntro: "தனிப்பட்ட, வணிக மற்றும் சிறப்பு நிகழ்வுத் தேவைகளுக்கான தரமான பிரிண்டிங் சேவைகள்.",
    catInvitationTitle: "அழைப்பிதழ் பிரிண்டிங்",
    catInvitationDesc: "கிரகப்பிரவேசம், திருமணம் மற்றும் பூப்புனித நீராட்டு விழா அழைப்பிதழ் வடிவமைப்புகள்.",
    catBillBookTitle: "பில் புக் பிரிண்டிங்",
    catBillBookDesc: "கடைகள் மற்றும் வணிகங்களுக்கான தனிப்பயன் பில் புக்குகள்.",
    catNoticeTitle: "அறிவிப்பு பிரிண்டிங்",
    catNoticeDesc: "சமூக, பள்ளி மற்றும் வணிக அறிவிப்புகளுக்கான நோட்டீஸ்கள்.",
    catVisitingTitle: "விசிட்டிங் கார்டுகள்",
    catVisitingDesc: "தனிநபர்கள் மற்றும் வணிகங்களுக்கான தொழில்முறை விசிட்டிங் கார்டுகள்.",
    invitationPanelHeading: "அழைப்பிதழ் பிரிண்டிங்",
    invitationPanelSubtext:
      "உங்கள் நிகழ்விற்கேற்ப அழைப்பிதழ் வடிவமைப்பைத் தேர்வு செய்யுங்கள். கீழே உள்ள விலைகள் மாதிரி மட்டுமே — சமீபத்திய விலைக்கு விசாரிக்கவும்.",
    tabHouseWarming: "கிரகப்பிரவேசம்",
    tabWedding: "திருமணம்",
    tabPuberty: "பூப்புனித நீராட்டு விழா",
    printingCtaTitle: "பிரிண்டிங் தேவை உள்ளதா?",
    printingCtaText: "பூஜா மொபைல்ஸை அழைக்கவும் அல்லது வருகை தரவும் — உதவ தயாராக உள்ளோம்.",
    enquireNow: "விசாரிக்கவும்",
    priceLabel: "₹XX / ஒரு பீஸ்",

    // ---------- Contact ----------
    contactEyebrow: "தொடர்பு",
    contactHeading: "பூஜா மொபைல்ஸை தொடர்புகொள்ளுங்கள்",
    callUs: "எங்களை அழைக்கவும்",
    emailUs: "எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்",
    sendEmail: "மின்னஞ்சல் அனுப்பவும்",
    visitUs: "வருகை தரவும்",
    getDirections: "வழி பெறவும்",
    fullAddress: "கீழஈரால், எட்டையாபுரம் தாலுகா, தூத்துக்குடி – 628908, தமிழ்நாடு, இந்தியா",

    // ---------- Footer ----------
    footerTagline: "டிராவல்ஸ் • இ-சேவை • பிரிண்டிங் சேவைகள்",
    footerAbout: "பயண டிக்கெட், அரசு இ-சேவை உதவி மற்றும் பிரிண்டிங் ஆகியவற்றிற்கான உங்கள் நம்பகமான உள்ளூர் ஒரே இடக் கடை.",
    footerCopyright: "© 2026 பூஜா மொபைல்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    // ---------- WhatsApp enquiry message ----------
    whatsappMessage: (itemName) =>
      `வணக்கம் பூஜா மொபைல்ஸ்,\n\nநான் ${itemName} குறித்து ஆர்வமாக உள்ளேன்.\n\nவிலை மற்றும் பிற விவரங்களைத் தெரிவிக்கவும்.`,
  },
};

export default translations;
