// Information to reach API
console.log("Enter API Key");
// const apiKey = '';
const url = 'https://api.rebrandly.com/v1/links';


// Some page element
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// const shortenUrl = () => {
//   const urlToShorten = inputField.value;
//   const data = JSON.stringify( {destination: urlToShorten} );
//   // console.log({destination: urlToShorten});
//   // console.log(data);

//   fetch(url, {
//     method: 'POST',
//     headers: {'Content-type': 'application/json',
//             'apikey': apiKey
//           },
//     body: data
//   })  
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       };
//       throw new Error('Request failed!');
//     }, networkError => console.log(networkError.message))
//     .then((jsonResponse) => {
//       return renderResponse(jsonResponse);
//     });
// }

// Async function
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify( {destination: urlToShorten} );

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json',
                'apikey': apiKey
              },
      body: JSON.stringify( {destination: urlToShorten} )
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return renderResponse(jsonResponse);
    }
    throw new Error('Request failedd!');
  } catch (error) {
    console.log(error.message);
  }

}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
