// src/pages/AccessibilityStatement.jsx
import React from "react";
import "./AccessibilityStatement.css";

function AccessibilityStatement() {
  return (
    <div className="accessibility-statement-page" dir="rtl">
      <div className="statement-container">
        <h1>הצהרת נגישות</h1>

        <section className="statement-section">
          <h2>מחויבות לנגישות</h2>
          <p>
            אנו ב[שם הארגון] מחויבים להנגשת האתר שלנו לאנשים עם מוגבלויות
            ולהבטחת חוויית גלישה נגישה ושווה לכולם.
          </p>
          <p>
            אתר זה תוכנן ופותח בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות
            (התאמות נגישות לשירות), התשע"ג-2013 ולתקן הבינלאומי{" "}
            <strong>WCAG 2.0</strong> ברמת AA.
          </p>
        </section>

        <section className="statement-section">
          <h2>התאמות הנגישות באתר</h2>
          <ul>
            <li>
              <strong>שינוי גודל גופנים:</strong> ניתן להגדיל את גודל הטקסט בכל
              האתר עד לפי 2 (200%) בהתאם לדרישות החוק הישראלי.
            </li>
            <li>
              <strong>מצב יום/לילה:</strong> מעבר חלק בין תצוגת יום לתצוגת לילה
              לנוחות גלישה בכל שעות היום.
            </li>
            <li>
              <strong>היפוך צבעים:</strong> אפשרות להיפוך כל הצבעים באתר לנוחות
              אנשים עם לקויות ראייה ספציפיות.
            </li>
            <li>
              <strong>עצירת אנימציות:</strong> אפשרות לעצור אנימציות באתר למי
              שחווה רגישות לתנועה.
            </li>
            <li>
              <strong>הדגשת קישורים:</strong> הדגשה ויזואלית של כל הקישורים באתר
              לניווט קל יותר.
            </li>
            <li>
              <strong>ניווט במקלדת:</strong> כל פונקציות האתר זמינות באמצעות
              מקלדת בלבד (Tab, Enter, Esc).
            </li>
            <li>
              <strong>תמיכה בקוראי מסך:</strong> האתר תואם לקוראי מסך מובילים
              כמו JAWS, NVDA ו-VoiceOver.
            </li>
          </ul>
        </section>

        <section className="statement-section">
          <h2>נגישות פיזית של המבנה</h2>
          <p>
            <strong>כתובת:</strong> [הזן כתובת פיזית]
            <br />
            <strong>חניה נגישה:</strong> [יש/אין חניה נגישה במקום]
            <br />
            <strong>כניסה נגישה:</strong> [פרט על רמפות, מעליות, וכניסות נגישות]
            <br />
            <strong>שירותים נגישים:</strong> [פרט על מיקום ונגישות שירותים]
            <br />
            <strong>מידע נוסף:</strong> [כל מידע רלוונטי נוסף על נגישות המבנה]
          </p>
        </section>

        <section className="statement-section">
          <h2>רכז נגישות</h2>
          <p>
            אם נתקלתם בבעיית נגישות באתר או שיש לכם שאלות או הצעות לשיפור, אנא
            פנו לרכז הנגישות שלנו:
          </p>
          <p>
            <strong>שם:</strong> [שם רכז הנגישות]
            <br />
            <strong>טלפון:</strong> <a href="tel:+972-XX-XXXXXXX">XX-XXXXXXX</a>
            <br />
            <strong>דוא"ל:</strong>{" "}
            <a href="mailto:accessibility@example.com">
              accessibility@example.com
            </a>
            <br />
            <strong>שעות פעילות:</strong> ימים א'-ה', 09:00-17:00
          </p>
        </section>

        <section className="statement-section">
          <h2>תאריך עדכון אחרון</h2>
          <p>
            הצהרת נגישות זו עודכנה לאחרונה בתאריך:{" "}
            <strong>{new Date().toLocaleDateString("he-IL")}</strong>
          </p>
        </section>

        <section className="statement-section">
          <h2>משוב ותלונות</h2>
          <p>
            אנו עושים מאמצים רציניים להנגיש את האתר, אך ייתכן שחלקים מסוימים
            עדיין לא נגישים במלואם. אם נתקלתם בבעיה או שיש לכם הצעה לשיפור, נשמח
            לשמוע מכם ונפעל לתקן את הבעיה בהקדם האפשרי.
          </p>
        </section>

        <div className="back-link-container">
          <a href="/" className="back-link">
            חזרה לדף הבית
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityStatement;
