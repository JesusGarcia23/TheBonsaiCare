import React, {useContext, Suspense, lazy }from 'react';
import {Context} from './hookAndContext/context';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';
const Navbar = lazy(() => import('./Components/Navbar'));

const App = () => {
  return (
    <div>
    <Suspense fallback={<div>...Loading</div>}>
    <Navbar/>
    <Switch>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/login' component={Login}/>
    </Switch>
    
    </Suspense>
    </div>
  );
}

export default App;
