import { Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes = ( ) => (
  <Switch>
    <Route path="/" exact component={Dashboard}   />
    <Route path="/repository" component={Repository} />
    <Route />
  </Switch>
)

export default Routes;