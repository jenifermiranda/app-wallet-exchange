import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './css/App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </main>

  );
}

export default App;
