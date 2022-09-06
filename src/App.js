import React, { useState } from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/compat/app"
import 'firebase/compat/auth'

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


import firebaseConfig from './Config/firebaseConfig';

firebase.initializeApp(firebaseConfig)


const App = () => {

  const [user, setUser] = useState(null)


  return (
    <Router>
      <ToastContainer>

      </ToastContainer>
      <UserContext.Provider value ={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Signin" element={<Signin/>}/>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path="*" element={<PageNotFound/>}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
