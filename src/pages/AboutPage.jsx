// src/pages/AboutPage.jsx
// דף אודות כולל מפה מוטמעת (Google Maps) מעל הפוטר בעיצוב מקצועי

import React, { useState } from "react";
// הוספת אפקט גלובלי במקום עטיפה מקומית
import "./AboutPage.css";

function GoogleMapEmbed() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`map-wrapper ${loaded ? "loaded" : "loading"}`}>
      {!loaded && (
        <div className="map-loading" aria-hidden="true">
          <div className="spinner" />
          <span>טוען מפה...</span>
        </div>
      )}
      <iframe
        title="מפת המיקום של הישיבה"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.908033081714!2d35.1102747!3d31.691081999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502dbf42ac10357%3A0xf0d319a67a4fcc3e!2z15vXoyDXlNeX15nXmdedIDcsINeR15nXqteoINei15nXnNeZ16o!5e0!3m2!1siw!2sil!4v1763917824935!5m2!1siw!2sil"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page" dir="rtl">
      <header className="about-hero">
        <h1 className="about-title">אודות הישיבה</h1>
        <p className="about-subtitle">
          יישיבת תומכי תמימים ביתר עילית – לגדול, להאיר, להוביל. ישיבתנו משמשת
          כ"חממה חסידית" המשלבת מצוינות והעמקה בלימוד הנגלה והחסידות, יחד עם יחס
          אישי, חם ואוהב לכל תלמיד. אנו מחנכים את התמימים להיות "נרות להאיר"
          ומנהיגים חסידיים, מתוך התקשרות פנימית ואיתנה לרבי, באווירה של שמחה,
          התרוממות רוח ומיצוי הפוטנציאל האישי של כל אחד ואחד.
        </p>
      </header>

      <section className="about-content">
        <div className="about-block">
          <h2>אור</h2>
          <p>
            המטרה העליונה בישיבתנו היא להאיר את הדרך ולהעניק את הכלים לכך שהתורה
            תאיר את נשמותיהם של ה'תמימים'. עם ניסיון רב-שנים, צוות הישיבה מעניק
            לכל תלמיד מעטפת אישית, המסייעת לו לגלות את ה"שמן" שבו ולהאיר באור
            עצמי ופנימי. השילוב בין חינוך על חשיבות השקידה וההתמדה בלימוד נגלה
            וחסידות, לבין שימת דגש על קידומו האישי של כל תמים לפי כוחותיו – היא
            הדרך הסלולה להצלחה ולהעמדת נרות להאיר.
          </p>
        </div>
        <div className="about-block">
          <h2>חום</h2>
          <p>
            כשם שאילן זקוק למים ולחום השמש כדי לצמוח ולפרוח, כך חינוכו של נער
            חסידי דורש "ווארמקייט" – חום ואהבה חסידית, המביאים לצמיחה ולהתרוממות
            הרוח. צוות המשפיעים והר"מים נושאים בגאון את השליחות החשובה: חינוך
            התמימים מתוך אהבה ואכפתיות אמיתית, היוצרים קרקע פורייה לצמיחתם
            הרוחנית.
          </p>
        </div>
        <div className="about-block">
          <h2>התקשרות</h2>
          <p>
            ההתקשרות לרבי ולענייני קדושה היא אבן היסוד והתכלית של משימת החינוך.
            אנו מאמינים כי החדרת ה"רוח החסידית" בליבות התלמידים הנקנית ע"י הקשר
            האישי של הצוות והתלמידים, היא הערובה להעמדת דור מקושר ומסור, חדור
            בשליחות. "כשקשורים למעלה – לא נופלים למטה" – פתגם זה הוא נר לרגלינו
            בהתוויית הדרך החינוכית והובלת התלמידים בדרך העולה מעלה.
          </p>
        </div>
      </section>

      {/* כתובת + פרטי יצירת קשר לפני המפה */}
      <section className="address-section">
        <div className="address-box">
          <h3>פרטי התקשרות ומיקום</h3>
          <ul className="contact-list">
            <li>
              <strong>טלפון:</strong> 02-5800083
            </li>
            <li>
              <strong>דוא"ל:</strong> totlb7@gmail.com
            </li>
            <li>
              <strong>כתובת:</strong> רח' כף החיים 7, ביתר עילית
            </li>
          </ul>
          <div className="map-cta">
            <a
              href="https://maps.google.com/?q=Jerusalem"
              target="_blank"
              rel="noopener noreferrer"
              className="external-map-button"
              data-no-spark
            >
              פתיחה במפות גוגל
            </a>
          </div>
        </div>
      </section>

      {/* מפה מוטמעת */}
      <section className="map-section">
        <h2 className="map-title">מפת המקום</h2>
        <GoogleMapEmbed />
      </section>
    </div>
  );
}

export default AboutPage;
