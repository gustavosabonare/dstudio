/* globals process */

// Helpers
import get from '../helpers/http';

const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';
// Pages
export function wpPages() {
  return get(`${serverUrl}/api/pages`);
}

// Songs
export function wpMusics() {
  return get(`${serverUrl}/api/songs`);
}

// Event
export function wpEvent(id) {
  return get(`${serverUrl}/api/events/${id}`);
}

// Services
export function wpServices() {
  return get(`${serverUrl}/api/services`);
}