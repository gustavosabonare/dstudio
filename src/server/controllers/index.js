// Services
import { getConvidas, getPages, getServices, getSongs } from '../services/wordpress';

// Helpers
import { buildConvidaPost, buildServicePost, buildSongPost, postBuilder } from '../helpers/postBuilder';

async function pagesController(req, res) {
  try {
    const pages = await getPages();

    return res.status(200).send(pages);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function convidasController(req, res, returnValue) {

  try {
    const convidasPosts = await getConvidas();
    const newConvidaPosts = await Promise.all(convidasPosts.map(buildConvidaPost));

    if (returnValue === true)
      return newConvidaPosts;

    return res.status(200).send(newConvidaPosts);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function servicesController(req, res) {
  try {
    const servicesPosts = await getServices();
    const newServicesPosts = await Promise.all(servicesPosts.map(buildServicePost));

    return res.status(200).send(newServicesPosts);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function songsController(req, res) {

  try {
    const songsPosts = await getSongs();
    const newSongsPost = songsPosts.map(buildSongPost);

    return res.status(200).send(newSongsPost);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function eventsController(req, res) {
  const eventsPosts = {};

  try {
    eventsPosts['convidas'] = await convidasController(null, null, true);
    return res.status(200).send(eventsPosts);
  } catch (err) {
    return res.status(500).send(err);
  }
}

export {
  convidasController,
  pagesController,
  servicesController,
  songsController,
  eventsController
}