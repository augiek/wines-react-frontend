
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://wines-django-backend-cp.herokuapp.com/'

const fetchWineByID = (wineID) => {
  return fetch(`${BASE_URL}/wines/${wineID}`)
  .then((response) => response.json())
}

const fetchWines = () => {
  return fetch(`${BASE_URL}/wines`)
  .then((response) => response.json())
}

const addWine = (wineObject) => {
  return fetch(`${BASE_URL}/wines/add`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(wineObject)
  })
}

export default {
  fetchWineByID,
  fetchWines,
  addWine
}
