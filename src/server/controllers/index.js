// Services
import { getPages, getPlaylists, getEvent } from '../services/cms';

const pagesController = async (req, res) => {
  try {
    const pages = await getPages();

    return res.status(200).send(pages);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

const playlistsController = async (req, res) => {

  try {
    const playlists = await getPlaylists();

    return res.status(200).send(playlists);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

const eventsController = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await getEvent(id);

    return res.status(200).send(event);
  } catch (err) {
    return res.status(500).send('Erro Interno');
  }
}

export {
  pagesController,
  playlistsController,
  eventsController
}