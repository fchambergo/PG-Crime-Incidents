import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component{

    render(){
        return(

            <div className="ui large inverted pointing menu">
                <div className="ui container">
                    <div className="pg-logo">PG County Crime Incidents</div>
                    <div className="right menu">
                        <Link to="/" className="item">Home</Link>
                        <Link to="/about" className="item">About</Link>
                        <Link to="/documentation" className="item">Documentation</Link>
                    </div>
                </div>
            </div>


        );
    }
}

export default Navbar;