import fetch from 'node-fetch';

export function searchComplete(officials) {
  console.log(officials);
  return {
    type: 'SEARCH',
    officials,
  };
}

export function searchIncomplete(error) {
  return {
    type: 'SEARCH',
    error,
  };
}

export function search(zipCode) {
  return function(dispatch) {
    return fetch('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyBuMCc6qwjIkbKuc2nehvoODJXy-6yMc_4')
    .then(res => res.text())
    .then(body => dispatch(searchComplete(body)))
    .catch(error => dispatch(searchIncomplete(error)));
  };
}
