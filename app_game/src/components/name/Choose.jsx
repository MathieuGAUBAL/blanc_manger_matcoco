import React, { Component } from "react";
import "./Choose.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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

    console.log("hello", event.target.value);

    let player1 = event.target.value;
    let play1 = { type: "get_player1", player1: player1 };
    this.props.dispatch(play1);
  };

  playerTwo = event => {
    this.setState({ player2: event.target.value });
    let player2 = event.target.value;
    let play2 = { type: "get_player2", player2: player2 };
    this.props.dispatch(play2);
  };

  playerThree = event => {
    this.setState({ player3: event.target.value });
    let player3 = event.target.value;
    let play3 = { type: "get_player3", player3: player3 };
    this.props.dispatch(play3);
  };

  playerFour = event => {
    this.setState({ player4: event.target.value });
    let player4 = event.target.value;
    let play4 = { type: "get_player4", player4: player4 };
    this.props.dispatch(play4);
  };

  render() {
    return (
      <div className='d-flex backColor'>
        <div className=' black_marginPseudo col-md-2 col-lg-2'></div>
        <div className='flex-column w-100'>
          <div className='d-flex justify-content-center align-items-center col-sm-12 mt-2 '>
            <h1 className='font-pseudo align-items-center mt-5 mb-5'>
              Balance ton pseudo!
            </h1>
          </div>
          <div className='d-flex justify-content-center col-md-12 col-lg-12'>
            <form>
              <div className='d-flex flex-column '>
                <div className='d-flex mt-3'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='/images/avatar-lou.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label className='labelColor'>
                      Joueur 1
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player1}
                        onChange={this.playerOne}
                        className='selectPseudo'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12 mt-3'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='/images/avatar-alex.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label className='labelColor'>
                      Joueur 2
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player2}
                        onChange={this.playerTwo}
                        className='selectPseudo'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12 mt-3'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='/images/avatar-mat.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label className='labelColor'>
                      Joueur 3
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player3}
                        onChange={this.playerThree}
                        className='selectPseudo'
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex col-xs-12 mt-3 mb-5'>
                  <div className='resize'>
                    <img
                      className='imageResize'
                      src='/images/avatar-arm.png'
                      alt=''
                    />
                  </div>
                  <div className='d-flex align-items-center  '>
                    <label className='labelColor'>
                      Joueur 4
                      <input
                        type='text'
                        name='J1'
                        value={this.state.player4}
                        onChange={this.playerFour}
                        className='selectPseudo'
                      />
                    </label>
                  </div>
                </div>
                <div className='d-flex justify-content-center '>
                  <Link to='/choice'>
                    <button
                      type='submit'
                      value='envoyer'
                      className='btn-blockPseudo  mt-4 mb-5 btn btn-lg buttonColor'
                      style={
                        this.state.player1 !== "" &&
                        this.state.player2 !== "" &&
                        this.state.player3 !== "" &&
                        this.state.player4 !== ""
                          ? { display: "" }
                          : { display: "none" }
                      }
                    >
                      FONCEZ!
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=' black_marginPseudo col-md-2 col-lg-2 '></div>
      </div>
    );
  }
}

export default connect()(Choose);
