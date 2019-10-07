// Helpers
import get from '../helpers/http';

const baseUrl = 'http://localhost:3000/api/';

const getAxiosConfig = () => ({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Pages
export function wpPages() {
  return get(`${baseUrl}pages`, getAxiosConfig());
}

// Songs
export function wpMusics() {

  return get(`${baseUrl}songs`, getAxiosConfig());
}

// Events
export function wpEvents() {

  return get(`${baseUrl}events`, getAxiosConfig());
}

// Services
export function wpServices() {

  return get(`${baseUrl}services`, getAxiosConfig());
}