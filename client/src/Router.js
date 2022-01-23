import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import './index.css';
import 'moment/locale/ru' 
import 'mapbox-gl/dist/mapbox-gl.css';
import 'antd/dist/antd.css';
import { MapPage } from './pages/MapPage';
import { StartPage } from './pages/StartPage';
import { MainPage } from './pages/MainPage';
import {useDispatch, useSelector} from 'react-redux'
import { checkAuth } from './redux/Auth/actions';
import { host } from './Axios';

{/* <Route key='' path='' component={} exact/> */}

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    checkAuth(dispatch)
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={StartPage} exact/>
        <Route path='/main/*' component={MainPage} exact />
        <Route path='/map' component={MapPage} exact/>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
