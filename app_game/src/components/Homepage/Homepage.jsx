import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { playSound, stopSound } from "../../sound-utils";

class Homepage extends Component {
  render() {
    return (
      <div className='accueil'>
        {playSound("./Happy.mp3")}
        <div className='logo'>
          <img src='/images/bmc.png' alt='logo accueil' className='imageHome' />
          <Link to='/choose'>
            <button className='bouton-go'>GO</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
