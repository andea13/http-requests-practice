function getWeather(city, days) {
  //http://api.weatherapi.com/v1/forecast.json?key=1a15ea9459d1431d8ca94129231705&q=Paris&days=5
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "1a15ea9459d1431d8ca94129231705";

  fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`).then(
    (response) => {
      console.log(response);
    }
  );
}
