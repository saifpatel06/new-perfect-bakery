import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import TrustBar from "../src/components/TrustBar";
import BakerySection from "../src/components/BakerySection";
import SnackSection from "../src/components/SnackSection";
import MiniMartSection from "../src/components/MiniMartSection";
import BulkOrderSection from "../src/components/BulkOrderSection";
import Testimonials from "../src/components/Testimonials";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <BakerySection />
      <SnackSection />
      <MiniMartSection />
      <BulkOrderSection />
      <Testimonials />
      <Footer />
    </>
  );
}