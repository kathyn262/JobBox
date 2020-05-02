import { Redirect, Route } from 'react-router-dom';
import React from 'react';

/// is any allowed in this case? 
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(rtProps) => (
    rest.user
      ? <Component {...rtProps} {...rest} />
      : <Redirect to="/login" />
  )} />
);

export default PrivateRoute;