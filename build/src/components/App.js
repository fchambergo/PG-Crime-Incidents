import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Documentation from "./Documentation";

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