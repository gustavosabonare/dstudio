// Scenes
import {
  About,
  Convida,
  Home,
  Services,
  Videos
} from '../../client/scenes';

// Containers
import PlayerContainer from '../../client/containers/player';

export default [
  {
    path: '*',
    component: PlayerContainer,
    exact: true
  },
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "/videos",
    component: Videos,
    exact: true
  },
  {
    path: "/services",
    component: Services,
    exact: true
  },
  {
    path: "/convida/:id",
    component: Convida,
    exact: true
  }
];