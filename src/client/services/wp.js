// Helpers
import get from '../helpers/http';

const baseUrl = 'http://localhost:3000/api/';

// Pages
export function wpPages() {
  return get(`${baseUrl}pages`);
}

// Songs
export function wpMusics() {
  return get(`${baseUrl}songs`);
}

// Event
export function wpEvent(id) {
  return get(`${baseUrl}events/${id}`);
}

// Services
export function wpServices() {
  return get(`${baseUrl}services`);
}