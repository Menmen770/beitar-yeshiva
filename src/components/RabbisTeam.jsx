// src/components/RabbisTeam.jsx
// קומפוננטת צוות הרבנים - סליידר אוטומטי אינסופי

import React from "react";
import "./RabbisTeam.css";

// נתוני הרבנים
const rabbisData = [
  {
    id: 1,
    name: 'הגה"ח מרדכי מישולבין',
    title: "ראש הישיבה",
    image: "/images/rabbi1.jpg",
    description: "ראש הישיבה ומרביץ תורה במשך 25 שנה",
  },
  {
    id: 2,
    name: "הרב יחיאל קוצר",
    title: "משפיע ומשגיח",
    image: "/images/rabbi2.jpeg",
    description: "משגיח רוחני ומחנך",
  },
  {
    id: 3,
    name: "הרב שלמה יהודה ליצמן",
    title: "משפיע",
    image: "/images/rabbi3.jpg",
    description: "מרביץ תורה ומגיד שיעורי הלכה",
  },
  {
    id: 4,
    name: "הרב מנחם מענדל הכהן רוט",
    title: 'ר"מ ומשפיע',
    image: "/images/rabbi4.jpeg",
    description: "מלמד ומדריך תלמידים צעירים",
  },
  {
    id: 5,
    name: "הרב מרדכי מינצברג",
    title: 'ר"מ',
    image: "/images/rabbi5.jpg",
    description: "אחראי על התכנון החינוכי",
  },
  {
    id: 6,
    name: "הרב זעליג וולפא",
    title: 'מגד"ש',
    image: "/images/rabbi6.jpeg",
    description: "מלווה תלמידים בצורה אישית",
  },
];

function RabbisTeam() {
  return (
    <section className="rabbis-team-section" dir="rtl">
      <div className="rabbis-container">
        <header className="rabbis-header">
          <h2 className="rabbis-title">צוות הרבנים</h2>
          <p className="rabbis-subtitle">
            צוות מסור ומנוסה המלווה את התלמידים בכל שלב
          </p>
        </header>

        {/* סליידר אוטומטי אינסופי */}
        <div
          className="rabbis-slider"
          style={{
            "--card-width": "175px",
            "--card-height": "240px",
            "--quantity": rabbisData.length,
          }}
        >
          <div className="rabbis-list">
            {rabbisData.map((rabbi, index) => (
              <div
                key={rabbi.id}
                className="rabbi-item"
                style={{ "--position": index + 1 }}
              >
                <div className="rabbi-card">
                  <div className="rabbi-image-wrapper">
                    <img
                      src={rabbi.image}
                      alt={rabbi.name}
                      className="rabbi-image"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%230d3b66" width="400" height="400"/%3E%3Ctext fill="white" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E%D7%AA%D7%9E%D7%95%D7%A0%D7%94%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="rabbi-overlay"></div>
                  </div>
                  <div className="rabbi-info">
                    <h3 className="rabbi-name">{rabbi.name}</h3>
                    <p className="rabbi-title">{rabbi.title}</p>
                    <p className="rabbi-description">{rabbi.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RabbisTeam;
