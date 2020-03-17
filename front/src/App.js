import React, {useContext, Suspense, lazy }from 'react';
import { Context } from './hookAndContext/context';
import {Switch, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Search from './Components/SearchCare';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import CreateBonsai from './Components/CreateBonsai';
import BecomeCarer from './Components/BecomeCarer';
import CarerProfile from './Components/CarerProfile';
import './App.css';

const Navbar = lazy(() => import('./Components/Navbar'));

const App = () => {
  return (
    <div>
    <Suspense fallback={<div>...Loading</div>}>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/search' component={Search}/>
    <Route exact path='/profile/:id' component={Profile}/>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route exact path='/createBonsai' component={CreateBonsai}/>
    <Route exact path='/becomeacarer' component={BecomeCarer}/>
    <Route exact path = '/carerProfile/:id' component={CarerProfile}></Route>
    </Switch>
    
    </Suspense>
    </div>
  );
}

export default App;
