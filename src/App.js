import React from 'react'
import Home from './pages'
import './App.css'
import Signin from './pages/signin'
import {Switch,Route} from 'react-router-dom'
export default function App() {
  
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </div>
  )
}
