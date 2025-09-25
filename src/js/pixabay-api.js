import axios from 'axios';

const API_KEY = '51344129-a8075834a2d0391c119eb3239';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => res.data);
}
