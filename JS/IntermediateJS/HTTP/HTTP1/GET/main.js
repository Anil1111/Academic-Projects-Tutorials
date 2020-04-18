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
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endPoint = url + queryParams + wordQuery + additionalParams + topicQuery;
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      // renderRawResponse(xhr.response);
      // renderResponse(xhr.response);
      renderJsonResponse(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  //Use of preventDefault
  //Clicking on a "Submit" button, prevent it from submitting a form
  //Clicking on a link, prevent the link from following the URL

  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  };
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
