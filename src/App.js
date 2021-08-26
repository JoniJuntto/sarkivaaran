import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Frontpage from './components/Frontpage';
import Gallery from './components/Gallery';


export default function App(){

  return(
    <BrowserRouter>
        <div>
          
          <Switch>
            <Route exact path='/' component={ Frontpage }/>
            <Route path='/galleria/' component={ Gallery }/>
            <Route component={ Frontpage }/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}