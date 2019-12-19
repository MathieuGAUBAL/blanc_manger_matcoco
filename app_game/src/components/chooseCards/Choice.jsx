import React, { Component } from "react";
import "./choice.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamecard: "",
      playercard: [],
      cards1: "",
      cards2: "",
      cards3: "",
      cards4: ""
    };
  }

  componentDidMount() {
    this.getGameCard();
    this.getPlayerCard();
  }

  getGameCard = () => {
    let url = "http://localhost:5000/api/gamecard";
    fetch(url, { crossdomain: true })
      .then(response => response.json())
      .then(data => {
        this.setState({
          gamecard: data[Math.floor(Math.random() * 15)].text
        });
      });
  };

  getPlayerCard = () => {
    let url = "http://localhost:5000/api/playercard";
    fetch(url, { crossdomain: true })
      .then(response => response.json())
      .then(data => {
        this.setState({
          playercard: data
        });
      });
  };

  numeroOne = e => {
    if (e.target.value !== "") {
      let stockNum1 = parseInt(e.target.value);

      let playercard1 = this.state.playercard[stockNum1 - 1].text;
      let pcard1 = { type: "get_playercard1", playercard1: playercard1 };
      this.props.dispatch(pcard1);

      let gamecard = this.state.gamecard;
      console.log("gamecard", this.state.gamecard);
      let gcard1 = { type: "get_gamecard", gamecard: gamecard };
      this.props.dispatch(gcard1);
    }
  };

  numeroTwo = e => {
    if (e.target.value !== "") {
      let stockNum2 = parseInt(e.target.value);
      let playercard2 = this.state.playercard[stockNum2 - 1].text;
      let pcard2 = { type: "get_playercard2", playercard2: playercard2 };
      this.props.dispatch(pcard2);
    }
  };

  numeroThree = e => {
    if (e.target.value !== "") {
      let stockNum3 = parseInt(e.target.value);
      let playercard3 = this.state.playercard[stockNum3 - 1].text;
      let pcard3 = { type: "get_playercard3", playercard3: playercard3 };
      this.props.dispatch(pcard3);
    }
  };

  numeroFour = e => {
    if (e.target.value !== "") {
      let stockNum4 = parseInt(e.target.value);
      let playercard4 = this.state.playercard[stockNum4 - 1].text;
      let pcard4 = { type: "get_playercard4", playercard4: playercard4 };
      this.props.dispatch(pcard4);
    }
  };

  handle = () => {
    let tabpoints = [
      this.props.points1,
      this.props.points2,
      this.props.points3,
      this.props.points4
    ];

    let maxpoints = Math.max(...tabpoints);

    let tabwinner = [];

    for (let i = 0; i < 4; i++) {
      if (tabpoints[i] === maxpoints) {
        tabwinner.push(i + 1);
      }
    }

    if (tabwinner.includes(1)) {
      let winnername1 = this.props.player1;
      let wname1 = { type: "get_winnername1", winnername1: winnername1 };
      this.props.dispatch(wname1);

      let winnerimage1 = true;
      let wimage1 = { type: "get_winnerimage1", winnerimage1: winnerimage1 };
      this.props.dispatch(wimage1);
    }

    if (tabwinner.includes(2)) {
      let winnername2 = this.props.player2;
      let wname2 = { type: "get_winnername2", winnername2: winnername2 };
      this.props.dispatch(wname2);

      let winnerimage2 = true;
      let wimage2 = { type: "get_winnerimage2", winnerimage2: winnerimage2 };
      this.props.dispatch(wimage2);
    }

    if (tabwinner.includes(3)) {
      let winnername3 = this.props.player3;
      let wname3 = { type: "get_winnername3", winnername3: winnername3 };
      this.props.dispatch(wname3);

      let winnerimage3 = true;
      let wimage3 = { type: "get_winnerimage3", winnerimage3: winnerimage3 };
      this.props.dispatch(wimage3);
    }

    if (tabwinner.includes(4)) {
      let winnername4 = this.props.player4;
      let wname4 = { type: "get_winnername4", winnername4: winnername4 };
      this.props.dispatch(wname4);

      let winnerimage4 = true;
      let wimage4 = { type: "get_winnerimage4", winnerimage4: winnerimage4 };
      this.props.dispatch(wimage4);
    }
  };

  submitFormNumbers = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.state.gamecard);
    return (
      <div className='d-flex'>
        <div className=' black_margin col-md-2 col-lg-2'></div>
        <div className='flex-column'>
          {/* score mapstatetoprops nom et score */}

          <div className='score w-100 d-flex flex-column justify-content-around borderScore colordiv '>
            <div className='d-flex flex-column justify-content-around'></div>

            <div className='d-flex flex-row justify-content-around'>
              <div>
                <div className='namePlayer'>{this.props.player1}</div>
                <div>
                  {this.props.points1}{" "}
                  {this.props.points1 >= 2 ? "points" : "point"}
                </div>
              </div>

              <div>
                <div className='namePlayer'>{this.props.player2}</div>
                <div>
                  {this.props.points2}{" "}
                  {this.props.points2 >= 2 ? "points" : "point"}
                </div>
              </div>
            </div>

            <div className='d-flex flex-row justify-content-around'>
              <div>
                <div className='namePlayer'>{this.props.player3}</div>
                <div>
                  {this.props.points3}{" "}
                  {this.props.points3 >= 2 ? "points" : "point"}
                </div>
              </div>

              <div>
                <div className='namePlayer'>{this.props.player4}</div>
                <div>
                  {this.props.points4}{" "}
                  {this.props.points4 >= 2 ? "points" : "point"}
                </div>
              </div>
            </div>
          </div>

          {/* card centrale */}

          <div className='card col-7 col-md-6 '>
            <div className='d-flex justify-content-center '>
              <h2 className='titleCard'>Blanc Manger Matcoco</h2>
            </div>

            <div>
              <p className='paraCard '>{this.state.gamecard}</p>
            </div>
          </div>

          <div>
            <h3 className='instructions mt-4'>Taper votre numéro de carte!</h3>
          </div>

          {/* choix joueur */}

          <div>
            <form className='' onSubmit={this.submitFormNumbers} action=''>
              <div className='d-flex ml-5 mt-3 d-flex justify-content-center '>
                <label>
                  {this.props.player1}:
                  <input
                    type='number'
                    name='numero1'
                    onChange={e => this.numeroOne(e)}
                    className='select ml-3'
                  />
                </label>

                <label>
                  {this.props.player2}:
                  <input
                    type='number'
                    name='numero2'
                    onChange={this.numeroTwo}
                    className='select ml-3'
                  />
                </label>
              </div>

              <div className='d-flex ml-5 mt-3 justify-content-center'>
                <label>
                  {this.props.player3}:
                  <input
                    type='number'
                    name='number3'
                    onChange={this.numeroThree}
                    className='select ml-3'
                  />
                </label>

                <label>
                  {this.props.player4}:
                  <input
                    type='number'
                    name='number4'
                    onChange={this.numeroFour}
                    className='select ml-3'
                  />
                </label>
              </div>

              <div className='d-flex flex-row  '>
                <div className='d-flex justify-content-center buttonScore'>
                  <Link
                    to={
                      this.props.points1 > 0 ||
                      this.props.points2 > 0 ||
                      this.props.points3 > 0 ||
                      this.props.points4 > 0
                        ? "/Trophy"
                        : "/choice"
                    }
                  >
                    <button
                      type='submit'
                      value='envoyer'
                      className='btn-block btn btn-lg buttonColor colorBut'
                      onClick={this.handle}
                      style={
                        this.props.points1 > 0 ||
                        this.props.points2 > 0 ||
                        this.props.points3 > 0 ||
                        this.props.points4 > 0
                          ? {
                              backgroundColor: "#f14e4e",
                              color: "white"
                            }
                          : { backgroundColor: "#808080", color: "white" }
                      }
                    >
                      Fin de Partie
                    </button>{" "}
                  </Link>
                </div>

                <div className='d-flex justify-content-center buttonScore'>
                  <Link className='link-mdr' to='/Answer'>
                    <button
                      type='submit'
                      value='envoyer'
                      className='btn-block btn btn-lg buttonColor'
                    >
                      Fusion des cartes
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=' black_margin col-md-2 col-lg-2'></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.points1);
  return {
    player1: state.player1,
    player2: state.player2,
    player3: state.player3,
    player4: state.player4,

    points1: state.points1,
    points2: state.points2,
    points3: state.points3,
    points4: state.points4,

    winnerimage1: state.winnerimage1,
    winnerimage2: state.winnerimage2,
    winnerimage3: state.winnerimage3,
    winnerimage4: state.winnerimage4
  };
};

export default connect(mapStateToProps)(Choice);
