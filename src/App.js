import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </main>

  );
}

export default App;
