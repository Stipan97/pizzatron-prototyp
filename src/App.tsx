import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './views/Home';
import { LogIn } from './views/LogIn';
import { OrderComplete } from './views/OrderComplete';
import { Register } from './views/Register';
import { ResetPassword } from './views/ResetPassword';

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={LogIn} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/home" component={Home} />
          <Route path="/orderComplete" component={OrderComplete} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
