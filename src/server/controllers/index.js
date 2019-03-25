// Services
import { getConvidas, getPages, getServices, getSongs } from '../services/wordpress';

// Helpers
import { buildConvidaPost, buildServicePost, buildSongPost, postBuilder } from '../helpers/postBuilder';

async function pagesController(req, res) {

  try {
    const pagesPosts = await getConvidas();
    const newPagePosts = pagesPosts.map(postBuilder);

    return res.status(200).send(newPagePosts);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function convidasController(req, res) {

  try {
    const convidasPosts = await getConvidas();
    const newConvidaPosts = convidasPosts.map(buildConvidaPost);

    return res.status(200).send(newConvidaPosts);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

async function servicesController(req, res) {
  try {
    const servicesPosts = await getServices();
    const newServicesPosts = servicesPosts.map(buildServicePost);

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

export {
  convidasController,
  pagesController,
  servicesController,
  songsController
}