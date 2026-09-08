import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rituals from "./components/Rituals";
import Colour from "./components/Colour";
import Owner from "./components/Owner";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="w-full pt-20 min-h-[calc(100vh-28rem)] bg-background">
        <div className="flex flex-col w-full">
          <Hero />
          <Rituals />
          <Colour />
          <Owner />
          <Testimonials />
          <Location />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
