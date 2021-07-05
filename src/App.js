import './App.css';
import { Route, Switch } from 'react-router-dom';
import ItemsList from './containers/ItemsList/ItemsList';
import ItemDetail from './containers/ItemDetail/ItemDetail';
import Home from './containers/Home/Home';
import Header from './common/components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
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
    </>
  );
}

export default App;
