// Constrollers
import { convidasController, servicesController, songsController, pagesController, eventsController } from '../controllers';

export default function apiRouter(router) {

  router.get('/services', servicesController)
  router.get('/convidas', convidasController)
  router.get('/songs', songsController)
  router.get('/pages', pagesController)
  router.get('/events', eventsController)

  return router;
}