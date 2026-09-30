import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MobileCta } from "./components/MobileCta";
import {
  ClientLogos,
  Faq,
  FinalCta,
  Manage,
  Proof,
  WhyUs,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ClientLogos />
        <Manage />
        <Proof />
        <WhyUs />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
