// src/pages/ContactPage.jsx
// דף צור קשר עם טופס - כרגע שומר בזיכרון בלבד (בלי שרת)
// מאוחר יותר נחבר ל-API

import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // בינתיים רק נדפיס ונראה הודעה
    console.log("📩 פרטי הטופס:", formData);

    // הצגת הודעת הצלחה
    setSubmitted(true);

    // איפוס הטופס אחרי 3 שניות
    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);

    // 👉 כאן מאוחר יותר נוסיף fetch לשרת:
    // fetch('http://localhost:3001/api/contacts', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
  };

  return (
    <div className="contact-page" dir="rtl">
      <header className="contact-hero">
        <h1 className="contact-title">צור קשר</h1>
        <p className="contact-subtitle">
          נשמח לשמוע ממך! מלא את הטופס למטה ונחזור אליך בהקדם.
        </p>
      </header>

      <section className="contact-content">
        <div className="contact-info">
          <h2>פרטי התקשרות</h2>
          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <strong>טלפון</strong>
              <p>02-5800083</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <div>
              <strong>דוא״ל</strong>
              <p>totlb7@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <strong>כתובת</strong>
              <p>רח' כף החיים 7, ביתר עילית</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">🕐</span>
            <div>
              <strong>שעות פעילות</strong>
              <p>א'-ה' 08:00–18:00</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>שלח לנו הודעה</h2>

          {submitted && (
            <div className="success-message">
              ✅ ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">שם מלא *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="הכנס את שמך המלא"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">טלפון *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="05X-XXX-XXXX"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">דוא״ל *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">הודעה *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="כתוב כאן את הודעתך..."
            />
          </div>

          <button type="submit" className="submit-button" data-no-spark>
            שלח הודעה
          </button>

          <p className="form-note">
            💡 <strong>שים לב:</strong> כרגע הטופס שומר את הנתונים רק בזיכרון
            הדפדפן. כשנחבר את השרת, הפרטים יישמרו במסד הנתונים.
          </p>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
