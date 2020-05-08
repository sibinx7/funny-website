import React from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import Sidebar from "./common/sidebar";

import './app.scss';
import './assets/scss/main.scss'
import Header from "./common/header";
import {MainRoutes} from "./routes";

function App() {
  return (
    <div className="App box-mode">
      <Router>
        {/* Header section */}
        <Header/>
        {/* end Header Section */}
        {/* Sidebar Section */}
        <Sidebar/>
        {/* end Sidebar Section */}

        {/* Content Section */}
        <div className={"main__router"}>
          <Switch>
            {
              MainRoutes.reverse().map((route, index) => {
                return <Route {...route} key={index}/>
              })
            }
          </Switch>
        </div>
        {/* end Content Section */}

      </Router>
    </div>
  );
}

export default App;
