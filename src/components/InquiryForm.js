import { useState } from "react";
import { Send } from "lucide-react";
import styles from "../../styles/InquiryForm.module.css";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
      `Name: ${formData.name}
      Phone: ${formData.phone}
      Occasion: ${formData.occasion}
      Message: ${formData.message}`
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✓</div>

        <h3>Inquiry Received!</h3>

        <p>
          We'll call you back within a few hours
          to discuss your requirement.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className={styles.title}>
        Send an Inquiry
      </h3>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.row}>
          <div className={styles.field}>
            <label>YOUR NAME</label>

            <input
              type="text"
              placeholder="Rahul Patil"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className={styles.field}>
            <label>PHONE NUMBER</label>

            <input
              type="tel"
              placeholder="+91 98765 43210"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>OCCASION / EVENT TYPE</label>

          <select
            value={formData.occasion}
            onChange={(e) =>
              setFormData({
                ...formData,
                occasion: e.target.value,
              })
            }
          >
            <option value="">Select occasion...</option>
            <option value="birthday">Birthday Party</option>
            <option value="wedding">Wedding</option>
            <option value="office">Office Event</option>
            <option value="festival">Festival</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>TELL US MORE</label>

          <textarea
            rows="4"
            placeholder="No. of guests, cake flavour, delivery date..."
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
          />
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
        >
          <Send size={14} />
          Submit Inquiry
        </button>
      </form>
    </>
  );
}