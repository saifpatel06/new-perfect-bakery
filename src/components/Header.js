import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import styles from "../../styles/Header.module.css";
import logoImg from "../../public/image.png";
import { navLinks } from "./data/bakeryData";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href) => {
    setMobileOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <button
          className={styles.logoButton}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <Image
            src={logoImg}
            alt="New Perfect Bakery"
            width={180}
            height={70}
            priority
            className={styles.logo}
          />
        </button>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          {navLinks.map((item) => (
            <button
              key={item.label}
              className={styles.navLink}
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className={styles.rightSection}>
          <a href="tel:+918485059365" className={styles.callBtn}>
            <Phone size={14} />
            Call Now
          </a>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {navLinks.map((item) => (
              <button
                key={item.label}
                className={styles.mobileNavLink}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            ))}

            <a href="tel:+918485059365" className={styles.mobileCallBtn}>
              <Phone size={14} />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
