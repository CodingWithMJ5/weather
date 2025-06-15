export const getWeatherData = async (cityName) => {
  const response = await fetch(
    `http://localhost:5000/api/weather?city=${cityName}`
  );
  return response.json();
};
