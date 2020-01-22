import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../store';
import Pages, { PageTypes } from '../pages';


const setupRoutes = (): React.ReactElement[] => Object.values(Pages)
  .map((Page: PageTypes): React.ReactElement => {
    const { title, path } = Page;

    return (<Route key={title} path={path} component={Page} />);
  });

const App = (): React.ReactElement => {
  return (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        {setupRoutes()}
      </BrowserRouter>
    </PersistGate>
  </Provider>
  );
};

export default App;
