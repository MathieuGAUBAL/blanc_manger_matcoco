
/* eslint-disable import/first */
import React, { Component } from 'react';
import './answer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const GET_POINTS1 = { type: "get_points1" };
export const GET_POINTS2 = { type: "get_points2" };
export const GET_POINTS3 = { type: "get_points3" };
export const GET_POINTS4 = { type: "get_points4" };






class Answer extends Component {
    constructor() {
        super();

        this.state = {
            points1: 0,
            points2: 0,
            points3: 0,
            points4: 0,
            randomDescription: [],
            array_player_answer: [],
            player_answser_ref: [],
            player1: false,
            player2: false,
            player3: false,
            player4: false
        }
    }



    handleAward = event => {
        let player_answser = event.target.innerText;
        console.log(player_answser);
        const test = this.state.randomDescription.map((item) => item === player_answser ? this.state.player_answser_ref.indexOf(item) : "");

        let awardAdd1 = Number(test.join("").trim()) + 1;

        switch (awardAdd1) {
            case 1:
                this.props.dispatch({ type: GET_POINTS1.type });
                this.setState({ player1: true })
                break;
            case 2:
                this.props.dispatch({ type: GET_POINTS2.type });
                this.setState({ player2: true })
                break;
            case 3:
                this.props.dispatch({ type: GET_POINTS3.type });
                this.setState({ player3: true })
                break;
            case 4:
                this.props.dispatch({ type: GET_POINTS4.type });
                this.setState({ player4: true })
                break;
            default:
                console.log();
        }
    }

    answer_generation = () => {
        for (let j in this.state.array_player_answer) {
            this.state.player_answser_ref.push(this.state.array_player_answer[j]);
        }

        let randswer = this.state.array_player_answer;
        let randomDescription = [];
        let arrLen = randswer.length;
        for (let i = 0; i < arrLen; i++) {
            let random = Math.floor(Math.random() * randswer.length);
            randomDescription.push(randswer.splice(random, 1)[0]);
        }

        this.setState({
            randomDescription: randomDescription
        })


    }
  };

  answer_generation = () => {
    for (let j in this.state.array_player_answer) {
      this.state.player_answser_ref.push(this.state.array_player_answer[j]);
    }


    getPlayerCard() {
        this.state.array_player_answer.push(this.props.playercard1);
        this.state.array_player_answer.push(this.props.playercard2);
        this.state.array_player_answer.push(this.props.playercard3);
        this.state.array_player_answer.push(this.props.playercard4);
    }






    render() {

        return (
            <div className="container d-flex flex-column justify-content-around answer-group">
                <div className="game-card">
                    <h4>{this.props.gamecard}</h4>
                </div>
                <div className="player-card">
                    <button className="player-button" data-toggle="modal" data-target="#test" onClick={this.handleAward}><p>{this.state.randomDescription[0]}</p></button>
                    {this.state.player1 &&
                        <div className="w3-panel row  mx-auto">
                            <div className="col-12 align-self-center text mx-auto">
                                <h3>Bravo {this.props.player1}!</h3>
                                <p>{`Tu remportes 1 point.`}</p>
                            </div>
                        </div>}
                </div>

                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward} ><p>{this.state.randomDescription[1]}</p></button>
                    {this.state.player2 &&
                        <div className="w3-panel row  mx-auto">
                             <div className="col-12 align-self-center text  mx-auto">
                                <h3>Bravo {this.props.player2}!</h3>
                                <p>{`Tu remportes 1 point.`}}</p>
                            </div>
                        </div>}
                </div>
                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward}><p>{this.state.randomDescription[2]}</p></button>
                    {this.state.player3 &&
                        <div className="w3-panel row  mx-auto">
                             <div className="col-12 align-self-center text  mx-auto">
                                <h3>Bravo {this.props.player3}!</h3>
                                <p>{`Tu remportes 1 point.`}</p>
                            </div>
                        </div>}
                </div>
                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward}><p>{this.state.randomDescription[3]}</p></button>
                    {this.state.player4 &&
                        <div className="w3-panel row  mx-auto">
                           <div className="col-12 align-self-center text  mx-auto">
                                <h3>Bravo {this.props.player4}!</h3>
                                <p>{`Tu remportes 1 point.`}</p>
                            </div>
                        </div>}
                </div>

                <Link to="/Choice"><button className="btn btn-primary next-round"> Manche suivante</button></Link>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        points1: state.points1,
        points2: state.points2,
        points3: state.points3,
        points4: state.points4,
        playercard1: state.playercard1,
        playercard2: state.playercard2,
        playercard3: state.playercard3,
        playercard4: state.playercard4,
        gamecard: state.gamecard,
        player1: state.player1,
        player2: state.player2,
        player3: state.player3,
        player4: state.player4

    })
}

export default connect(mapStateToProps)(Answer);
