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
          <div className='score w-100 d-flex flex-column justify-content-around borderScore '>
            <div className='d-flex flex-row justify-content-around'>
              <div className='colordiv'>
                {this.props.player1} : {this.props.points1} points
              </div>
              <div className='colordiv'>
                {this.props.player2} : {this.props.points2} points
              </div>
            </div>

            <div className='d-flex flex-row justify-content-around '>
              <div className='colordiv'>
                {this.props.player3} : {this.props.points3} points
              </div>
              <div className='colordiv'>
                {this.props.player4} : {this.props.points4} points
              </div>
            </div>
          </div>

          {/* card centrale */}

          <div className='card col-9 col-md-6 '>
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
              <div className='d-flex ml-5 mt-3'>
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

              <div className='d-flex ml-5 mt-3'>
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

              <div className='d-flex justify-content-center '>
                <button
                  type='submit'
                  value='envoyer'
                  className='btn-block btn btn-lg buttonColor'
                >
                  Fusion des cartes
                </button>
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
  return {
    player1: state.player1,
    player2: state.player2,
    player3: state.player3,
    player4: state.player4,

    points1: state.points1,
    points2: state.points2,
    points3: state.points3,
    points4: state.points4
  };
};

export default connect(mapStateToProps)(Choice);
