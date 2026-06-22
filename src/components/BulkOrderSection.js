import { Phone } from "lucide-react";
import InquiryForm from "./InquiryForm";
import styles from "../../styles/BulkOrderSection.module.css";

const features = [
  "Custom fondant & designer cakes",
  "Bulk samosa & snack platters",
  "Office tiffin & catering packages",
  "Festival gifting hampers",
];

export default function BulkOrderSection() {
  return (
    <section id="bulk" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left */}

          <div>
            <span className={styles.tag}>🎉 Bulk & Event Orders</span>

            <h2 className={styles.heading}>
              Planning a Party
              <br />
              or Office Event?
            </h2>

            <p className={styles.description}>
              We handle custom cake orders, bulk snack catering for office
              events, and party platters for 10 to 500 people.
            </p>

            <ul className={styles.list}>
              {features.map((item) => (
                <li key={item}>
                  <span></span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="tel:+918485059365" className={styles.callBtn}>
              <Phone size={15} />
              Call to Discuss Your Order
            </a>
          </div>

          {/* Right */}

          <div className={styles.formCard}>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
