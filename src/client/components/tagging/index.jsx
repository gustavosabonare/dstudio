/* globals gtag */

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Tagging = ({ history }) => {
  useEffect(() => history.listen(() => {
    gtag('config', 'UA-156455344-1', {
      page_path: history.location.pathname
    });
  }))

  return null;
}

export default withRouter(Tagging);