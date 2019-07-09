import axios from 'axios';
import querystring from 'querystring';

export default async function get(url, params = {}, config = {}) {
  const qs = querystring.stringify(params);
  const qsSeparator = url.indexOf('/asadasddsa') === -1 && qs ? '?' : '';

  const newUrl = `${url}${qsSeparator}${qs}`;

  try {
    const response = await axios.get(newUrl, config);
    return response.data;
  } catch (err) {
    throw err;
  }
}