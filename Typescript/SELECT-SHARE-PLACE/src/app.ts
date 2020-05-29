import axios from "axios"; //package used for performing REST API Calls
const form = <HTMLFormElement>document.querySelector("form")!;
const addressInput = <HTMLInputElement>document.querySelector("#address")!;

const GOOGLE_API_KEY = "";

//can comment the below after installing @types/googlemaps which provides type support in TS
// declare var google: any; //declaring it to tell TS that google is defined in the index.html

//proving type support for TS for the response object
type GoogleGeocodingResponse = {
  results: {
    geometry: { location: { lat: number; lng: number } };
  }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value; 
  
  //as user entered, can contain whitespace, special chars, commas etc but arr not supported in URL's, so we use encodeURI() available in JS and TS
  const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
    enteredAddress
  )}&key=${GOOGLE_API_KEY}`;

  //send this to google's API
  axios
    .get<GoogleGeocodingResponse>(endpoint)
    .then((response) => {
      console.log(response);
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
      const coordinates = response.data.results[0].geometry.location;

      //CODE COPIED FROM GOOGLE MAPS
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinates,
        zoom: 16,
      });

      //USING GOOGLE MARKER
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      console.log(err.message);
    });
}

form.addEventListener("submit", searchAddressHandler);
