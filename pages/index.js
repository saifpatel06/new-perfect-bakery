import Head from "next/head";
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
    <Head>
        <title>
          New Perfect Bakery | Cakes, Snacks & Daily Essentials in Pimple Gurav
        </title>

        <meta
          name="description"
          content="New Perfect Bakery in Pimple Gurav, Pune. Fresh cakes, breads, samosas, snacks, dairy products and daily essentials. Open 7 AM to 11 PM."
        />

        <meta
          name="keywords"
          content="Bakery in Pimple Gurav, Cake Shop Pune, Fresh Bakery Pune, Samosa Shop Pune, New Perfect Bakery"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://new-perfect-bakery.vercel.app/"
        />
      </Head>
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