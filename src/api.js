//Base_URL
//const base_url = `https://api.rawg.io/api/key=${process.env.REACT_APP_GIMU_API}`;
const base_url = `https://api.rawg.io/api/games?key=82bc856577694520879ca3ed8c8d4e2f`;
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size10`;
//Upcoming games
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size10`;
//New games
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;

//export const popularGamesUrl = () =>
//  "https://api.rawg.io/api/games?key=82bc856577694520879ca3ed8c8d4e2f&dates=2019-09-01,2019-09-30&platforms=18,1,7";
