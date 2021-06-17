import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Gallery } from "../components/Gallery";
import { Biography } from "../components/Biography";
import { Interviews } from "../components/Interviews";
import { Performing } from "../components/Performing";

export default function RouterApp() {      
    return (

        <Router>
            <div>

                <Navbar />

                <Switch>
                    <Route exact path="/biography" component = { Biography } />
                    <Route exact path="/gallery" component = { Gallery } />
                    <Route exact path="/interviews" component = { Interviews }  />
                    <Route exact path="/performing" component = { Performing }  />
                    <Route path="/" component = { Home } />
                </Switch>
            </div>
        </Router>
    );
}