import React, {useContext, Suspense, lazy }from 'react';
import {Context} from './hookAndContext/context';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';


const App = () => {
  return (
    <div className="App">
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
