import Image from "next/image";
import styles from "../../../styles/SnackCard.module.css";

export default function SnackCard({
  img,
  name,
  desc,
  price,
  badge,
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
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>
          {badge}
        </span>

        <h3>{name}</h3>

        <p>{desc}</p>

        <span className={styles.price}>
          {price}
        </span>
      </div>
    </div>
  );
}