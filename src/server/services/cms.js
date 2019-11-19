// Helpers
import { getJson } from '../helpers/http';

const cmsUrl = process.env.CMS_URL || 'http://localhost:1337';

const getEvent = (id) => {
  const serviceURL = `${cmsUrl}/events/${id}`;

  return getJson(serviceURL)
}

const getPages = () => {
  const serviceURL = `${cmsUrl}/pages`;

  return getJson(serviceURL);
}

const getPlaylists = () => {
  const serviceURL = `${cmsUrl}/playlists`;

  return getJson(serviceURL)
}

export {
  getPages,
  getPlaylists,
  getEvent
}