// Helpers
import { getJson } from '../../helpers/http';

// Constants
import { baseURL } from '../../contants/wordpress';

const serviceURL = `${baseURL}pages`;

export const getPages = () => getJson(serviceURL);