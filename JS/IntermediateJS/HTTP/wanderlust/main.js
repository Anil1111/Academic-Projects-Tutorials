// Foursquare API Info
const clientId = '';
const clientSecret = '';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200417`;;

  try {
    const response = await fetch(urlToFetch, {cache: 'no-cache'});
    if (response.ok) {
      // console.log(response);   
      const jsonResponse = await response.json();
      let venues = jsonResponse.response.groups[0].items;
      venues = venues.map(item => item.venue);

      // console.log(venues);
      return venues;
      // return renderVenues(venues);
    }
  } catch (error) {
    console.log(error.message);
  }

}

const getForecast = () => {
  const urlToFetch  = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
  return fetch(urlToFetch)
    .then((response) => {
      if (response.ok) {
        // console.log(response);
        return response.json();
      };
      throw new Error('Request Failed!');
      }, networkError => console.log(networkError.message))
    .then((jsonResponse) => {
       return jsonResponse;
    });

  //   const xhr = new XMLHttpRequest;
  //   xhr.responseType = 'json';

  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === XMLHttpRequest.DONE) {
  //       return xhr.response;
  //     };
  //   };
  //   xhr.open('POST', weatherUrl);
  //   xhr.setRequestHeader('Content-type', 'application/json');
  //   xhr.send(body);

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    let venueContent = '';
    const name = venues[index].name;
    const location = venues[index].location;
    const venueIcon = venues[index].categories[0].icon;
    const iconSource = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    venueContent = createVenueHTML(name, location, iconSource);

    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  let weatherContent = '';
  weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
    .then((venues) => {
      return renderVenues(venues);
    });
  getForecast()
    .then((currentDay) => renderForecast(currentDay));

  return false;
}

$submit.click(executeSearch);