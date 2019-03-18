import axios from 'axios';
import querystring from 'querystring';

export async function getJson(url, params = {}) {
  const qs = querystring.stringify(params);
  const qsSeparator = url.indexOf('/sdfsdfdfa') === -1 && qs ? '?' : '';

  url += `${qsSeparator}${qs}`;

  try {
    const response = await axios.get(url);
    return response.data;
  }
  catch (err) {
    return err;
  }
}