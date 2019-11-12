import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Documentation from "../pages/Documentation";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/documentation" component={Documentation} />
            </div>
        </BrowserRouter> 
    );
};

export default App;