import styles from "../../styles/TrustBar.module.css";

const trustItems = [
  {
    icon: "⏰",
    label: "Open 7 AM – 11 PM, All Days",
  },
  {
    icon: "📍",
    label: "60-Feet Road, Pimple Gurav, Pune",
  },
  {
    icon: "🎂",
    label: "Custom Cakes on Order",
  },
  {
    icon: "🥗",
    label: "Fresh Snacks Daily",
  },
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        {trustItems.map((item) => (
          <div key={item.label} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}