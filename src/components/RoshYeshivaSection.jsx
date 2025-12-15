// src/components/RoshYeshivaSection.jsx
// קומפוננטת "מי אנחנו" עם תמונה של ראש הישיבה והסבר על הישיבה

import React from "react";
import "./RoshYeshivaSection.css";

function RoshYeshivaSection() {
  return (
    <section className="rosh-yeshiva-section" dir="rtl">
      <div className="rosh-video-wrapper">
        <div className="rosh-video-header">
          <h2 className="rosh-title">סרטון הסבר על הישיבה</h2>
          <p className="rosh-subtitle">
            צפו במסר לא קשור כי אין מידע בגוגל על הישיבה חוץ מזה.
          </p>
        </div>

        <div className="rosh-video-frame">
          <iframe
            src="https://www.youtube.com/embed/hoOj6toTfQ0"
            title='ישיבת חב"ד ביתר עילית'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default RoshYeshivaSection;
