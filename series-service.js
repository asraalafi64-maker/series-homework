// A1: מחזירה את שם הפרק לפי מיקום העונה ומיקום הפרק (אינדקסים מ-0)
export function getEpisodeTitle(show, seasonIndex, episodeIndex) {
  return show?.seasons?.[seasonIndex]?.episodes?.[episodeIndex]?.title;
}

// A2: מחזירה את מספר העונה האחרונה (התכונה number). אם אין עונות מחזירה 0
export function getLastSeasonNumber(show) {
  if (!show?.seasons || show.seasons.length === 0) {
    return 0;
  }
  return show.seasons[show.seasons.length - 1].number;
}

// A3: מחזירה את השנה של העונה הבאה, או "No announcement" אם אין
export function getNextSeasonYear(show) {
  return show?.nextSeason?.year ?? "No announcement";
}

// B1: מחזירה סדרה לפי id
export function getById(series, id) {
  return series.find(show => show.id === id);
}

// B2: מחזירה מערך של אובייקטים { title, seasons }
export function getSeasonsCount(series) {
  return series.map(show => ({
    title: show.title,
    seasons: show.seasons ? show.seasons.length : 0
  }));
}

// B3: בודקת אם יש לפחות פרק אחד בדירוג minRating ומעלה
export function hasTopEpisode(show, minRating) {
  if (!show?.seasons) return false;
  return show.seasons.some(season =>
    season.episodes.some(episode => episode.rating >= minRating)
  );
}

// B4: מחזירה מערך של שמות היוצרים ממדינה מסוימת
export function getCreatorsFrom(series, country) {
  return series
    .filter(show => show.creator && show.creator.country === country)
    .map(show => show.creator.name);
}

// B5: מחזירה מערך חדש ממוין לפי שנת התחלה (מהישנה לחדשה) בלי לשנות את המקור
export function sortByStartYear(series) {
  return [...series].sort((a, b) => a.startYear - b.startYear);
}