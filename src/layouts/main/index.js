import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routing from '../../common/routing';
import classes from './main.module.scss';

function Main() {
  return (
    <main className={classes.mainContainer}>
      <Switch>
        {routing.map(({ path, Component }) => (
          <Route path={path} key={path} exact>
            <Component />
          </Route>
        ))}
        <Redirect to="/404" />
      </Switch>
    </main>
  );
}

export default Main;
