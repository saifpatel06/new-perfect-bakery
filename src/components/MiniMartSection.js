import Image from "next/image";
import MartCard from "./cards/MartCard";
import styles from "../../styles/MiniMartSection.module.css";
import packagesImg from "../../public/packages.jpg";
import { martCategories } from "./data/bakeryData";

export default function MiniMartSection() {
  return (
    <section
      id="mart"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.content}>
            <span className={styles.tag}>
              🛒 Mini-Mart Essentials
            </span>

            <h2 className={styles.heading}>
              Your Daily Essentials,
              <br />
              <em>Right Here</em>
            </h2>

            <p className={styles.description}>
              Skip the big supermarket.
              From fresh Amul dairy to chilled
              beverages and packaged favourites —
              we stock what your household needs,
              open right up to 11 PM.
            </p>
          </div>

          <div className={styles.banner}>
            <Image
              src={packagesImg}
              alt="Mini Mart"
              fill
              className={styles.bannerImage}
            />

            <div className={styles.overlay}></div>

            <span className={styles.badge}>
              Stocked Fresh Daily
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {martCategories.map((item) => (
            <MartCard
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}