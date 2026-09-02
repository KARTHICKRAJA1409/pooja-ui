import { LanguageProvider } from "./context/LanguageContext.jsx";
import { LightboxProvider } from "./context/LightboxContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ServiceTabs from "./components/ServiceTabs.jsx";
import Travels from "./components/Travels.jsx";
import ESevai from "./components/ESevai.jsx";
import Printing from "./components/Printing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCall from "./components/FloatingCall.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <LightboxProvider>
        <Header />
        <Hero />
        <ServiceTabs />
        <Travels />
        <ESevai />
        <Printing />
        <Contact />
        <Footer />
        <FloatingCall />
      </LightboxProvider>
    </LanguageProvider>
  );
}
