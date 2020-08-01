/* globals gtag, window */

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Tagging = ({ history }) => {
  useEffect(() => {
    history.listen(() => setTimeout(() => {
      gtag('config', 'UA-156455344-1', {
        page_path: history.location.pathname,
        page_title: window.document.title,
      });
    }, 1000))
  })

  return null;
}

export default withRouter(Tagging);