import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MobileCta } from "./components/MobileCta";
import { FinalCta, Manage, Proof, WhyUs } from "./components/Sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Proof />
        <Manage />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
