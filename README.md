# series-homework
# SeriesHub - Homework 1

A modular project for managing and processing TV series data for the SeriesHub platform using JavaScript and Node.js.

## Running Tests
To run the automated test check:
```bash
node check.js

שאלה 1: אובייקטים ומערכים שיצרנו מחדש ב-addEpisode ולמה
בפונקציה addEpisode לא מספיק לבצע { ...show } מכיוון שאובייקט הסדרה מכיל מערכים ואובייקטים מוכנסים (Nested Object Structure). ביצוע Spread operator יחיד מעתיק רק את ההפניות ברמה הראשונה (Shallow Copy).
כדי למנוע מוטציה של האובייקט המקורי, יצרנו מחדש:

מערך סדרות חדש בעזרת map.

מערך עונות חדש (updatedSeasons) עבור הסדרה המבוקשת.

אובייקט עונה חדש עבור העונה הספציפית ומערך פרקים חדש (episodes) המכיל את הפרק הנוסף.
בדרך זו אנו שומרים על עקרון ה-Immutability ומונעים שינוי בלתי רצוי של זיכרון הנתונים המקורי.

שאלה 2: למה העתקה ב-... בתקלה #3 לא עזרה?
בתקלה #3 העמית ביצע firstSeason.episodes.push(episode) לפני החזרת האובייקט. הפעולה push משנה באופן ישיר (Mutating) את מערך הפרקים שבתוך העונה הראשונה המקורית בזיכרון.
לאחר מכן, כאשר הוחזר { ...show }, הועתקה ההפניה (Reference) לאותו מערך עונות ופרקים שכבר שונה בלולאה. העתקה בדרגה ראשונה לא מגנה על אובייקטים פנימיים אם פגענו בהם ישירות לפני כן.