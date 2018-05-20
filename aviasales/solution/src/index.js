import React from 'react';
import { render } from 'react-dom';

import Search from '~/components/search';


render(
  <Search />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
