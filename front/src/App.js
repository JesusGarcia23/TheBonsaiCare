import React, {useContext, Suspense, lazy }from 'react';
import { Context } from './hookAndContext/context';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CareSignup from './Components/CareSignup';
import ImageTest from './Components/ImageTest';
import Dashboard from './Components/Dashboard';
import CreateBonsai from './Components/CreateBonsai';
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
    <Route exact path='/caresignup' component={CareSignup}/>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route exact path='/createBonsai' component={CreateBonsai}/>
    <Route exact path='/becomeacarer'></Route>
    </Switch>
    
    </Suspense>
    </div>
  );
}

export default App;
