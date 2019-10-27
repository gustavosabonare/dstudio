// Scenes
import {
  Event,
  Page,
} from '../../client/scenes';

// Containers
import PlayerContainer from '../../client/containers/player';
import HeaderContainer from '../../client/containers/header';

export default [
  {
    path: '*',
    component: PlayerContainer,
    exact: true
  },
  {
    path: '*',
    component: HeaderContainer,
    exact: true
  },
  {
    path: "/:page?",
    component: Page,
    exact: true,
  },
  {
    path: "/details/:id",
    component: Event,
    exact: true
  }
];