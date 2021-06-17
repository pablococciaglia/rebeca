import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './router/RouterApp';
import './sass/materialize.scss';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <SimpleReactLightbox>
    <RouterApp />
  </SimpleReactLightbox>,
  document.getElementById('root')
);