// ייבוא פונקציות לניהול מסד נתונים מהקובץ db.js
// connect - חיבור למסד הנתונים
// buildTables - יצירת טבלאות במסד
// users - אובייקט שמגדיר את מבנה טבלת המשתמשים
// allAsync - הרצת שאילתה שמחזירה את כל התוצאות
// runAsync - הרצת שאילתה שלא מחזירה תוצאות (INSERT, UPDATE, DELETE)
// select, remove, insert, update - פונקציות לבניית שאילתות SQL
const {
  connect,
  buildTables,
  users,
  allAsync,
  runAsync,
  select,
  remove,
  insert,
  update,
} = require("./db/db.js");

// ייבוא ספריית Express - פריימוורק ליצירת שרת HTTP
const express = require("express");

// ייבוא CORS - מאפשר לשרת לקבל בקשות מדומיינים שונים (Frontend -> Backend)
const cors = require("cors");

// יצירת אפליקציית Express
const app = express();

// middleware שמאפשר לשרת לקרוא JSON מגוף הבקשות (req.body)
app.use(express.json());

// middleware שמאפשר בקשות CORS - כדי שהפרונטאנד יוכל לדבר עם השרת
app.use(cors());

// הפעלת השרת על פורט 3000
// כאשר השרת עולה, מתחבר למסד הנתונים ויוצר את הטבלאות
app.listen(3000, async (req, res) => {
  await connect(); // חיבור למסד הנתונים SQLite
  await buildTables(users); // יצירת טבלת המשתמשים (אם לא קיימת)
  console.log("server is on localhost:3000"); // הודעה שהשרת רץ
});
