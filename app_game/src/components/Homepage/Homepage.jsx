import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';


class Homepage extends Component {
    render() {
        return (
            <div className="accueil">
                <div className="logo">
                    <img src="/images/bmc.png" alt="logo accueil"/>
                    <Link to='/'><button className="bouton-go">GO</button></Link>
                </div> 
            </div>
        )
    }
}

export default Homepage;