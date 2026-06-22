import Image from "next/image";
import { Phone, Clock, ArrowRight, ChevronRight } from "lucide-react";
import styles from "../../styles/Hero.module.css";
import storeImg from "../../public/perfect.jpg";

const quickLinks = [
  {
    emoji: "🍰",
    label: "Fresh Bakery",
    href: "#bakery",
  },
  {
    emoji: "🥟",
    label: "Live Snack Counter",
    href: "#snacks",
  },
  {
    emoji: "🛒",
    label: "Mini-Mart",
    href: "#mart",
  },
];

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.background}>
        <Image
          src={storeImg}
          alt="New Perfect Bakery storefront"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hours Badge */}
          <div className={styles.hoursBadge}>
            <Clock size={14} />
            Open Today: 7:00 AM – 11:00 PM
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Pune's Favourite
            <br />
            <em>Neighbourhood Bakery</em>
          </h1>

          <p className={styles.description}>
            Fresh breads & cakes, steaming samosas off the counter, and all your
            daily essentials — all under one roof on 60-Feet Road, Pimple Gurav.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaWrapper}>
            <a href="tel:+918485059365" className={styles.primaryButton}>
              <Phone size={16} />
              Click to Call
            </a>

            <button
              className={styles.secondaryButton}
              onClick={() => scrollToSection("#bakery")}
            >
              Explore Menu
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            {quickLinks.map((item) => (
              <button
                key={item.label}
                className={styles.quickLink}
                onClick={() => scrollToSection(item.href)}
              >
                <span>{item.emoji}</span>
                {item.label}
                <ChevronRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
