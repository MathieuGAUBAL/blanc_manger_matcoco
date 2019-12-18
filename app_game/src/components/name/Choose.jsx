import React, { Component } from "react";
import "./Choose.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
      player3: "",
      player4: ""
    };
  }

  playerOne = event => {
    this.setState({ player1: event.target.value });
  };

  playerTwo = event => {
    this.setState({ player2: event.target.value });
  };

  playerThree = event => {
    this.setState({ player3: event.target.value });
  };

  playerFour = event => {
    this.setState({ player4: event.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    console.log('hello')

    let player1 = this.state.player1;
    let play1 = { type: "get_player1", player1: player1 };
   
    this.props.dispatch(play1);

    let player2 = this.state.player2;
    let play2 = { type: "get_player2", player2: player2 };
    this.props.dispatch(play2);

    let player3 = this.state.player3;
    let play3 = { type: "get_player3", player3: player3 };
    this.props.dispatch(play3);

    let player4 = this.state.player4;
    let play4 = { type: "get_player4", player4: player4 };
    this.props.dispatch(play4);
  };

  render() {
    console.log(this.state)
    return (
      <div className='d-flex '>
        <div className=' black_margin col-md-2 col-lg-2'></div>
        <div className='flex-column'>
          <div className='d-flex justify-content-center col-sm-12  '>
            <h1 className='font-pseudo'>Balance ton pseudo!</h1>
          </div>
          <div className='d-flex justify-content-center col-md-12 col-lg-12'>
            <form onSubmit={this.submitForm}>
              <div className='d-flex flex-column '>
                <div className='d-flex '>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='./images/test1.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label>
                      Joueur 1
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player1}
                        onChange={this.playerOne}
                        className='select'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='./images/test1.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label>
                      Joueur 2
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player2}
                        onChange={this.playerTwo}
                        className='select'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='./images/test1.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label>
                      Joueur 3
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player3}
                        onChange={this.playerThree}
                        className='select'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='./images/test1.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label>
                      Joueur 4
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player4}
                        onChange={this.playerFour}
                        className='select'
                      />
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-center '>
                  <button
                    type='submit'
                    value='envoyer'
                    className='btn-block btn btn-lg buttonColor'
                  >
                    Mourir de rire
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=' black_margin col-md-2 col-lg-2 '></div>
      </div>
    );
  }
}

export default connect()(Choose);
