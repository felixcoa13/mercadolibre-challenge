import './App.css';
import { Route, Switch } from 'react-router-dom';
import SearchResult from './containers/SearchResult/SearchResult';
import ItemDetail from './containers/ItemDetail/ItemDetail';
import Home from './containers/Home/Home';
import Header from './common/components/Header/Header';

function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <Switch>
        <Route
          exact 
          path='/items'
          render={(props) =><SearchResult {...props} />} 
        />
        <Route
          exact
          path='/items/:id'
          render={(props) =><ItemDetail {...props} />}
        />
        <Route
          exact
          path="/"
          render={(props) =><Home {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
