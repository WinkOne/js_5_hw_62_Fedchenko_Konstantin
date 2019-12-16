import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from "./container/Main/Main";
import AboutUs from "./container/AboutUs/AboutUs";
import Contacts from "./container/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/Contact" component={Contacts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
