export const getWeatherIconUrl = (iconCode: string) => {
  return `http://openweathermap.org/img/wn/${iconCode}.png`;
};

export const currentDate = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});
