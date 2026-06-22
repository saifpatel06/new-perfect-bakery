import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductCard from "./cards/ProductCard";
import styles from "../../styles/Bakery.module.css";
import displayCounterImg from "../../public/display-counter.jpg";
import { bakeryItems } from "./data/bakeryData";

export default function BakerySection() {
  const scrollToBulk = () => {
    const section = document.querySelector("#bulk");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="bakery"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header */}

        <div className={styles.top}>
          <div>
            <span className={styles.tag}>
              🍰 Fresh Bakery
            </span>

            <h2 className={styles.heading}>
              Baked with Love,
              <br />
              <em>Every Single Morning</em>
            </h2>

            <p className={styles.description}>
              From layered celebration cakes to
              everyday bread — our bakery team
              starts at dawn so everything you
              pick up is at its freshest.
            </p>
          </div>

          <div className={styles.counterImage}>
            <Image
              src={displayCounterImg}
              alt="Display Counter"
              fill
              className={styles.counterImg}
            />

            <div className={styles.overlay}></div>

            <span className={styles.counterLabel}>
              Our Display Counter
            </span>
          </div>
        </div>

        {/* Products */}

        <div className={styles.grid}>
          {bakeryItems.map((item) => (
            <ProductCard
              key={item.name}
              {...item}
            />
          ))}
        </div>

        {/* CTA */}

        <div className={styles.ctaWrap}>
          <button
            onClick={scrollToBulk}
            className={styles.ctaBtn}
          >
            Order a Custom Cake
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}