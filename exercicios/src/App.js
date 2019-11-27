import React from 'react';
// import Input from './components/Input/Input'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path=""component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

