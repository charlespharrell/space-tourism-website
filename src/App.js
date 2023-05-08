import './App.css';
import Destination from './component/Destination';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import Crew from './component/Crew';
import Tech from './component/Tech';
// import './Home.css'


function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <div className="con">
       <Switch>
          <Route exact path ='/'>
            <Home/ >
          </Route>

          <Route path ='/destination'>
            <Destination />
          </Route>     

          <Route path ='/crew'>
            <Crew />
          </Route>  

          <Route path ='/tech'>
            <Tech />
          </Route>    
       </Switch>    
          </div>
        </div>
      </Router>
  );
}

export default App;
