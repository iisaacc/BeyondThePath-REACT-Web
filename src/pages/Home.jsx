import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappWidget from "../components/ui/WhatsappWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsappWidget />
      <Footer />
    </>
  );
}