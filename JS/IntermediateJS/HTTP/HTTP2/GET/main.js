// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const topicQuery = topicField.value;
//   const endPoint = url + queryParams + wordQuery + additionalParams + topicQuery;

//   fetch(endPoint, {cache: 'no-cache'})
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error('Request failed!');
//     }, (networkError) => console.log(networkError.message))
//     .then((jsonResponse) => {
//       return renderResponse(jsonResponse);
//     });

// }

//ASYNC Version
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endPoint = url + queryParams + wordQuery + additionalParams + topicQuery;

  try {
    const response = await fetch(endPoint, {cache: 'no-cache'});
    if (response.ok) {
      const responseJson = await response.json();
      return renderResponse(responseJson);
    }
  } catch (error) {
    console.log(error.message);
  };  
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  //Use of preventDefault
  //Clicking on a "Submit" button, prevent it from submitting a form
  //Clicking on a link, prevent the link from following the URL

  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
