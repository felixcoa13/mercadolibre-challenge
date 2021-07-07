import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchResult } from './containers/SearchResult/SearchResult';
import { ItemDetail } from './containers/ItemDetail/ItemDetail';
import { Home } from './containers/Home/Home';
import { Header } from './common/components/Header/Header';
import './App.css';

// Configurando Rutas de la aplicación.
const App = () => (
  <div className="main-container">
    <Header />
    <Switch>
      <Route
        exact
        path="/items"
        render={() => <SearchResult />}
      />
      <Route
        exact
        path="/items/:id"
        render={() => <ItemDetail/>}
      />
      <Route exact path="/" render={() => <Home />} />
    </Switch>
  </div>
);

export default App;
