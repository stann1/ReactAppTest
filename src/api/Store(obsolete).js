/* eslint-disable no-undef */
function getAll(entities, cb) {
  let apiUrl = `/${entities}.json`;

  return fetch(apiUrl, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

// eslint-disable-next-line
function search(entities, query, cb){
  let apiUrl = `api/${entities}?q=${query}`;

  return fetch(apiUrl, {accept: 'application/json'})
    .then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const TopicsStore = { 
  getAll: getAll
 };
export default TopicsStore;