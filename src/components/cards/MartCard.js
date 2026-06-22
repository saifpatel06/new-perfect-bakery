import Image from "next/image";
import styles from "../../../styles/MartCard.module.css";

export default function MartCard({
  emoji,
  name,
  desc,
  img,
  brands,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={img}
          alt={name}
          fill
          className={styles.image}
        />

        <div className={styles.overlay}></div>

        <span className={styles.emoji}>
          {emoji}
        </span>
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>

        <p>{desc}</p>

        <div className={styles.brandList}>
          {brands.map((brand) => (
            <span
              key={brand}
              className={styles.brand}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}