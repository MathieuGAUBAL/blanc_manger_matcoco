import React, { Component } from "react";
import "./Trophy.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export const GET_RESETPOINTS = { type: "get_resetpoints" };

class Trophy extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  reset = () => {
    console.log("helllllo");
    let winnername1 = "";
    let wname1 = { type: "get_winnername1", winnername1: winnername1 };
    this.props.dispatch(wname1);

    let winnerimage1 = false;
    let wimage1 = { type: "get_winnerimage1", winnerimage1: winnerimage1 };
    this.props.dispatch(wimage1);

    let winnername2 = "";
    let wname2 = { type: "get_winnername2", winnername2: winnername2 };
    this.props.dispatch(wname2);

    let winnerimage2 = false;
    let wimage2 = { type: "get_winnerimage2", winnerimage2: winnerimage2 };
    this.props.dispatch(wimage2);

    let winnername3 = "";
    let wname3 = { type: "get_winnername3", winnername3: winnername3 };
    this.props.dispatch(wname3);

    let winnerimage3 = false;
    let wimage3 = { type: "get_winnerimage3", winnerimage3: winnerimage3 };
    this.props.dispatch(wimage3);

    let winnername4 = "";
    let wname4 = { type: "get_winnername4", winnername4: winnername4 };
    this.props.dispatch(wname4);

    let winnerimage4 = false;
    let wimage4 = { type: "get_winnerimage4", winnerimage4: winnerimage4 };
    this.props.dispatch(wimage4);

    let player1 = "";
    let play1 = { type: "get_player1", player1: player1 };
    this.props.dispatch(play1);

    let player2 = "";
    let play2 = { type: "get_player2", player2: player2 };
    this.props.dispatch(play2);

    let player3 = "";
    let play3 = { type: "get_player3", player3: player3 };
    this.props.dispatch(play3);

    let player4 = "";
    let play4 = { type: "get_player4", player4: player4 };
    this.props.dispatch(play4);

    let playercard1 = "";
    let pcard1 = { type: "get_playercard1", playercard1: playercard1 };
    this.props.dispatch(pcard1);

    let playercard2 = "";
    let pcard2 = { type: "get_playercard2", playercard2: playercard2 };
    this.props.dispatch(pcard2);

    let playercard3 = "";
    let pcard3 = { type: "get_playercard3", playercard3: playercard3 };
    this.props.dispatch(pcard3);

    let playercard4 = "";
    let pcard4 = { type: "get_playercard4", playercard4: playercard4 };
    this.props.dispatch(pcard4);

    this.props.dispatch({ type: GET_RESETPOINTS.type });
  };
  render() {
    return (
      <div className='blabla'>
        {/* Avatar du gagnant */}

        <div
          className='d-flex-column mx-auto winner-card'
          style={
            this.props.winnerimage1 ? { display: "" } : { display: "none" }
          }
        >
          <img
            className='card-img-top'
            src={this.props.winnerimage1 ? "/images/avatar-lou.png" : ""}
            alt={this.props.winnerimage1 ? "card image" : ""}
          />
          <div className='card-body'>
            <p className='card-text'>
              {this.props.winnerimage1 ? "Félicitations!" : ""}
            </p>
            <h4 className='card-title'>{this.props.winnername1}</h4>
          </div>
        </div>

        <div
          className='d-flex-column mx-auto winner-card'
          style={
            this.props.winnerimage2 ? { display: "" } : { display: "none" }
          }
        >
          <img
            className='card-img-top'
            src={this.props.winnerimage2 ? "/images/avatar-alex.png" : ""}
            alt={this.props.winnerimage2 ? "card image" : ""}
          />
          <div className='card-body'>
            <p className='card-text'>
              {this.props.winnerimage2 ? "Félicitations!" : ""}
            </p>
            <h4 className='card-title'>{this.props.winnername2}</h4>
          </div>
        </div>

        <div
          className='d-flex-column mx-auto winner-card'
          style={
            this.props.winnerimage3 ? { display: "" } : { display: "none" }
          }
        >
          <img
            className='card-img-top'
            src={this.props.winnerimage3 ? "/images/avatar-mat.png" : ""}
            alt={this.props.winnerimage3 ? "card image" : ""}
          />
          <div className='card-body'>
            <p className='card-text'>
              {this.props.winnerimage3 ? "Félicitations!" : ""}
            </p>
            <h4 className='card-title'>{this.props.winnername3}</h4>
          </div>
        </div>

        <div
          className='d-flex-column mx-auto winner-card'
          style={
            this.props.winnerimage4 ? { display: "" } : { display: "none" }
          }
        >
          <img
            className='card-img-top'
            src={this.props.winnerimage4 ? "/images/avatar-arm.png" : ""}
            alt={this.props.winnerimage4 ? "card image" : ""}
          />
          <div className='card-body'>
            <p className='card-text'>
              {this.props.winnerimage4 ? "Félicitations!" : ""}
            </p>
            <h4 className='card-title'>{this.props.winnername4}</h4>
          </div>
        </div>

        {/* Trophée */}

        <div className='d-flex mx-auto trophy-image mt-5'>
          <img
            className='card-img-top'
            src='https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_960_720.png'
            alt='card image'
          />
        </div>

        {/* Bouton pour rejouer une partie */}

        <Link to='/Choose'>
          <button
            type='submit'
            value='envoyer'
            className='btn btn-danger  mb-3 mt-5'
            onClick={this.reset}
          >
            Relancer une partie
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.points1);
  return {
    winnername1: state.winnername1,
    winnername2: state.winnername2,
    winnername3: state.winnername3,
    winnername4: state.winnername4,

    winnerimage1: state.winnerimage1,
    winnerimage2: state.winnerimage2,
    winnerimage3: state.winnerimage3,
    winnerimage4: state.winnerimage4
  };
};

export default connect(mapStateToProps)(Trophy);
