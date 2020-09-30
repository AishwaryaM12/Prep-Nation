import React from 'react';

import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import { Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import prepfinal from './containers/prepfinal';

function Routes() {
  return (
    <div >
      <Layout>
        <Switch>
          <Route path="/Signup" component={SignUp} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/" exact component={prepfinal} />
        </Switch>
      </Layout>
    </div>
  );
}
export default Routes;