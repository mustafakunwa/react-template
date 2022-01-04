import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import PageLoader from '../components/PageLoader';
import ContentLoader from '../components/ContentLoader';
import DashBoard from './Dashboard';
import NotFound from './NotFound';
const Routes = () => {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={DashBoard} exact />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
      <ContentLoader />
    </>
  );
};

export default Routes;
