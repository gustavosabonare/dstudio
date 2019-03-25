// Helpers
import { getJson } from '../../helpers/http';

// Constants
import { baseURL, perPage } from '../../contants/wordpress';

function getConvidas() {
  const serviceURL = `${baseURL}posts`;
  return getJson(serviceURL, { categories: 57, per_page: perPage })
}

function getPages() {
  const serviceURL = `${baseURL}pages`;
  return getJson(serviceURL, { per_page: perPage });
}

function getServices() {
  const serviceURL = `${baseURL}posts`;
  return getJson(serviceURL, { category: 60, per_page: perPage })
}

function getSongs() {
  const serviceURL = `${baseURL}media`;
  return getJson(serviceURL, { search: 'mp3', per_page: perPage })
}

export {
  getConvidas,
  getPages,
  getServices,
  getSongs
}