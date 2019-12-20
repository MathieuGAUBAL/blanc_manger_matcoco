import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { playSound, stopSound } from "../../sound-utils";

class Homepage extends Component {
  music = () => {
    playSound("./Happy.mp3");
  };
  render() {
    return (
      <div className='accueil'>
        <div className='logo'>
          <img
            src='/images/bmc2.png'
            alt='logo accueil'
            className='imageHome'
          />
          <Link to='/choose'>
            <button className='bouton-go'>GO</button>
          </Link>
        </div>

        <div>
          <button className='bouton-music' onClick={this.music}>
            <i class='fa fa-music fa-2x'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Homepage;
