// Helpers
import { getJson } from '../../helpers/http';

// Constants
import { baseURL, perPage } from '../../contants/wordpress';

function getConvidas() {
  const serviceURL = `${baseURL}posts`;
  return getJson(serviceURL, { categories: 57, per_page: perPage })
}

function getEvents(id) {
  const serviceURL = `http://localhost:1337/events/${id}`;
  return getJson(serviceURL)
}

function getPages() {
  const serviceURL = `http://localhost:1337/pages`;
  return getJson(serviceURL);
}

function getServices() {
  const serviceURL = `${baseURL}posts`;
  return getJson(serviceURL, { categories: 60, per_page: perPage })
}

function getSongs() {
  const serviceURL = `http://localhost:1337/playlists`;
  return getJson(serviceURL)
}

function getMedias(parent) {
  const serviceURL = `${baseURL}media`;
  return getJson(serviceURL, { parent, per_page: perPage })
}

export {
  getConvidas,
  getPages,
  getServices,
  getSongs,
  getMedias,
  getEvents
}