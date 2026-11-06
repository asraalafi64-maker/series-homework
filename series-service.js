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