import { Star } from "lucide-react";
import styles from "../../styles/Testimonials.module.css";
import { testimonials } from "./data/bakeryData";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <span className={styles.tag}>
            ⭐ What Customers Say
          </span>

          <h2 className={styles.heading}>
            Loved by the Neighbourhood
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <div
              key={item.name}
              className={styles.card}
            >
              <div className={styles.stars}>
                {Array.from({
                  length: item.stars,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="#C97B2E"
                    stroke="none"
                  />
                ))}
              </div>

              <p className={styles.review}>
                "{item.text}"
              </p>

              <div className={styles.user}>
                <div className={styles.avatar}>
                  {item.initial}
                </div>

                <div>
                  <p className={styles.name}>
                    {item.name}
                  </p>

                  <p className={styles.area}>
                    {item.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}