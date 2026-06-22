import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import styles from "../../styles/Footer.module.css";
import logoImg from "../../public/image.png";
import { navLinks } from "./data/bakeryData";

export default function Footer() {
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
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}

          <div className={styles.brand}>
            <Image
              src={logoImg}
              alt="New Perfect Bakery"
              width={180}
              height={70}
              className={styles.logo}
            />

            <p className={styles.description}>
              Your neighbourhood bakery, snack counter,
              and mini-mart — all in one place on
              60-Feet Road, Pimple Gurav.
              Serving Pune since day one.
            </p>

            <a
              href="tel:+919876543210"
              className={styles.phoneBtn}
            >
              <Phone size={14} />
              +91 98765 43210
            </a>
          </div>

          {/* Hours */}

          <div>
            <h4 className={styles.title}>
              Opening Hours
            </h4>

            <ul className={styles.hours}>
              <li>
                <span>Monday – Sunday</span>
                <strong>7:00 AM – 11:00 PM</strong>
              </li>

              <li>
                <span>Public Holidays</span>
                <strong>8:00 AM – 10:00 PM</strong>
              </li>
            </ul>

            <div className={styles.openNow}>
              <span className={styles.dot}></span>
              Open Now
            </div>
          </div>

          {/* Location */}

          <div>
            <h4 className={styles.title}>
              Find Us
            </h4>

            <a
              href="https://maps.google.com/?q=New+Perfect+Bakery+Pimple+Gurav+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.location}
            >
              <MapPin size={15} />

              <span>
                New Perfect Bakery,
                <br />
                60-Feet Road,
                <br />
                Pimple Gurav,
                <br />
                Pune 411061
              </span>
            </a>

            <a
              href="https://maps.google.com/?q=New+Perfect+Bakery+Pimple+Gurav+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps
              <ArrowRight size={12} />
            </a>

            <div className={styles.navWrap}>
              <h4 className={styles.navTitle}>
                Navigate
              </h4>

              <ul className={styles.navList}>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        scrollToSection(item.href)
                      }
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className={styles.bottomBar}>
          <p>
            © {new Date().getFullYear()} New Perfect Bakery, 
            Pimple Gurav, Pune. 
            All rights reserved.
          </p>

          <p>
            Open 7 AM – 11 PM ·
            Every Day ·
            60-Feet Road
          </p>
        </div>
      </div>
    </footer>
  );
}