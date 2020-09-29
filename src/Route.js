import React from 'react';
import App from './containers/App';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/signUp' component={SignUp}/>
        <Route path='/logIn' component={LogIn}/>
      </Switch>
    </main>
  );
}
export default Routes;