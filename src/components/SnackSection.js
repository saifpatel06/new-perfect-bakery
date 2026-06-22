import Image from "next/image";
import { Clock } from "lucide-react";
import SnackCard from "./cards/SnackCard";
import styles from "../../styles/SnackSection.module.css";
import snackDisplayImg from "../../public/snack-display.jpg";
import { snackItems } from "./data/bakeryData";

export default function SnackSection() {
  return (
    <section
      id="snacks"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header */}

        <div className={styles.top}>
          <div>
            <span className={styles.tag}>
              🥟 Live Snack Counter
            </span>

            <h2 className={styles.heading}>
              Made Fresh,
              <br />
              <em>Served Hot</em>
            </h2>

            <p className={styles.description}>
              Our live counter runs through the day —
              samosas, dhokla, kachori, and more,
              prepared fresh each morning and
              restocked through the evening.
              Grab them while they're hot.
            </p>

            <div className={styles.time}>
              <Clock size={15} />
              Counter open: 8:00 AM – 10:00 PM daily
            </div>
          </div>

          <div className={styles.imageBox}>
            <Image
              src={snackDisplayImg}
              alt="Snack Counter"
              fill
              className={styles.image}
            />

            <div className={styles.overlay}></div>

            <span className={styles.imageBadge}>
              🔥 Made Fresh Daily
            </span>
          </div>
        </div>

        {/* Cards */}

        <div className={styles.grid}>
          {snackItems.map((item) => (
            <SnackCard
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}