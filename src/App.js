import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import Routes from './pages';
import configureStore, { history } from './redux/store';
import AppWrapper from './components/AppWrapper';
import ErrorBoundary from './components/ErrorBoundary';
export const store = configureStore();

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppWrapper>
            <Switch>
              <Routes />
            </Switch>
          </AppWrapper>
        </ConnectedRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
