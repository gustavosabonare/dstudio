// Helpers
import { getJson } from '../../helpers/http';

// Constants
import { baseURL } from '../../contants/wordpress';

const serviceURL = `${baseURL}media`;

export const getSongs = () => getJson(serviceURL, { search: 'mp3' })