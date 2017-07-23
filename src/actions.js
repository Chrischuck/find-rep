import fetch from 'node-fetch';

export function searchComplete(data) {
  const jsonData = JSON.parse(data);
  return {
    type: 'SEARCH',
    payload: jsonData.officials,
  };
}

export function searchIncomplete(error) {
  console.log(error)
  return {
    type: 'SEARCH',
    error,
  };
}

export function search(address) {
  return function(dispatch) {
    return fetch(
      `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&roles=legislatorUpperBody&roles=legislatorLowerBody&levels=country&key=AIzaSyBuMCc6qwjIkbKuc2nehvoODJXy-6yMc_4`
    )
    .then(res => res.text())
    .then(body => dispatch(searchComplete(body)))
    .catch(error => dispatch(searchIncomplete(error)));
  };
}
