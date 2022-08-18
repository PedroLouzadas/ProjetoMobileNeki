import React from 'react';
import Routes from './routes';
import { ContextLogin } from './Context/ContextLogin';

export default () => {
  return (
    <ContextLogin>
    <Routes />
    </ContextLogin>
  );
};
