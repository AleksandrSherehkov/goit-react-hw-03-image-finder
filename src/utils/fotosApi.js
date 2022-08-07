import axios from 'axios';

const API_KEY = '28592682-30ff71119c6d581761e4defab';

export const getFotos = (page = 1) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        page,
        editors_choice: true,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        key: API_KEY,
      },
    })
    .then(response => response.data);
};

export const getSearchFotos = (page = 1, query) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        page,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
        key: API_KEY,
      },
    })
    .then(response => response.data);
};
