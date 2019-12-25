// Constrollers
import { playlistsController, pagesController, eventsController } from '../controllers';

export default function apiRouter(router) {

  router.get('/songs', playlistsController)
  router.get('/pages', pagesController)
  router.get('/events/:id', eventsController)

  return router;
}