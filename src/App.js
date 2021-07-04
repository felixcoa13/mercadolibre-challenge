import './App.css';
import { Route, Switch } from 'react-router-dom';
import ItemsList from './containers/ItemsList/ItemsList';
import ItemDetail from './containers/ItemDetail/ItemDetail';
import Home from './containers/Home/Home';

function App() {
  return (
    <Switch>
      <Route
        exact 
        path='/items'
        render={(props) =><ItemsList {...props} />} 
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
  );
}

export default App;
