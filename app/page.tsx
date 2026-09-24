import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { Header, Hero } from "./components/Hero";
import { MobileCta } from "./components/MobileCta";
import {
  Audience,
  Comparison,
  Faq,
  Problem,
  Process,
  Proof,
  Services,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Comparison />
        <Audience />
        <Process />
        <Proof />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
