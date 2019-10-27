// Services
import { getConvidas, getPages, getServices, getSongs, getEvents } from '../services/wordpress';

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
    const songs = await getSongs();

    return res.status(200).send(songs);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function eventsController(req, res) {
  const { id } = req.params;

  try {
    const event = await getEvents(id);

    return res.status(200).send(event);
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