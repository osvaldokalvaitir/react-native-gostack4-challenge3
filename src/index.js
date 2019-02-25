import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import '~/config/MapboxConfig';

import Main from '~/pages/main';

import store from '~/store';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
