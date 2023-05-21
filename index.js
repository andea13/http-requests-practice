const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
search.addEventListener("submit", onSubmitSearch);

function onSubmitSearch(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements);
  const { query, days } = event.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch((error) => console.log(error));
}

function getWeather(city, days) {
  //http://api.weatherapi.com/v1/forecast.json?key=1a15ea9459d1431d8ca94129231705&q=Paris&days=5
  const BASE_URL = "http://api.weatherapi.com/v1";
  const API_KEY = "1a15ea9459d1431d8ca94129231705";

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

function createMarkup(array) {
  return array
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
        <img src="${icon}" alt="${text}" />
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
      </li>`
    )
    .join("");
}
