import React from 'react';

import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import prepfinal from './containers/prepfinal';

function Routes() {
  return (
    <div >
        <Switch>
          <Route path="/Signup" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Layout>
          <Route path="/" exact component={prepfinal} />
          </Layout>        
        </Switch>
    </div>
  );
}
export default Routes;