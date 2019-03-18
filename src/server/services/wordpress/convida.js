// Helpers
import { getJson } from '../../helpers/http';

// Constants
import { baseURL } from '../../contants/wordpress';

const serviceURL = `${baseURL}posts`;

export const getConvidas = () => getJson(serviceURL, { category: 57 })