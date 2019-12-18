import React, { Component } from "react";
import "./choice.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: 0,
      numero2: 0,
      numero3: 0,
      numero4: 0
    };
  }

  numeroOne = event => {
    this.setState({ numero1: event.target.value });
  };

  numeroTwo = event => {
    this.setState({ numero2: event.target.value });
  };

  numeroThree = event => {
    this.setState({ numero3: event.target.value });
  };

  numeroFour = event => {
    this.setState({ numero4: event.target.value });
  };

  submitFormNumbers = e => {
    e.preventDefault();

    let numero1 = this.state.numero1;
    let num1 = { type: "get_numero1", numero1: numero1 };
    this.props.dispatch(num1);

    let numero2 = this.state.numero2;
    let num2 = { type: "get_numero2", numero2: numero2 };
    this.props.dispatch(num2);

    let numero3 = this.state.numero3;
    let num3 = { type: "get_numero3", numero3: numero3 };
    this.props.dispatch(num3);

    let numero4 = this.state.numero4;
    let num4 = { type: "get_numero4", numero4: numero4 };
    this.props.dispatch(num4);
  };

  render() {
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
              <p className='paraCard '>Je crois que j'ai vomi du ....</p>
            </div>
          </div>

          <div>
            <h3 className='instructions mt-4'>Taper votre numéro de carte!</h3>
          </div>

          {/* choix joueur */}

          <div>
            <form
              classname='d-flex'
              onSubmit={this.submitFormNumbers}
              action=''
            >
              <div className='d-flex ml-5 mt-3'>
                <label>
                  {this.props.player1}:
                  <input
                    type='number'
                    name='numero1'
                    value={this.state.numero1}
                    onChange={this.numeroOne}
                    className='select ml-3'
                  />
                </label>

                <label>
                  {this.props.player2}:
                  <input
                    type='number'
                    name='numero2'
                    value={this.state.numero2}
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
                    value={this.state.numero3}
                    onChange={this.numeroThree}
                    className='select ml-3'
                  />
                </label>

                <label>
                  {this.props.player4}:
                  <input
                    type='number'
                    name='number4'
                    value={this.state.numero4}
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
