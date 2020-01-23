import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../store';
import Pages, { PageTypes } from '../pages';

import '../../public/main.css';

const setupRoutes = (): React.ReactElement[] => Object.entries(Pages)
  .map(([pageTitle, PageComponent]: [string, PageTypes]): React.ReactElement => {
    const { path } = PageComponent;

    return (<Route key={pageTitle} path={path} component={PageComponent} />);
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
