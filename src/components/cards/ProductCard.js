import Image from "next/image";
import styles from "../../../styles/ProductCard.module.css";

export default function ProductCard({
  img,
  name,
  desc,
  tag,
  price,
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

        {tag && (
          <span className={styles.tag}>
            {tag}
          </span>
        )}
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>

        <p>{desc}</p>

        {price && (
          <span className={styles.price}>
            {price}
          </span>
        )}
      </div>
    </div>
  );
}