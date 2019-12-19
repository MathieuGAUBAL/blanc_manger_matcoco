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
            array_player_answer: ["1 C'est à cela qu'on reconnait un Lensois... blagergersg rgrgsergerg rg",
                "2 C'est à cela qu'on reconnait un Lensois... blagergersg rgrgsergerg rg",
                "3 C'est à cela qu'on reconnait unzefzff Lensois... blagergersg rgrgsergerg rg",
                "4 TEXT 4ergergre gre jtyjtyjyj tyj tyj ger gre ger ger"],
            player_answser_ref: []
        }
    }

    handleAward = event => {
        let player_answser = event.target.innerText;
        console.log(player_answser);
        const test = this.state.randomDescription.map((item) => item === player_answser ? this.state.player_answser_ref.indexOf(item) : "");

        let awardAdd1 = Number(test.join("").trim()) + 1;

        switch (awardAdd1) {
            case 1:
                
                this.props.dispatch({type:GET_POINTS1.type} );
                break;
            case 2:
                let points2 = this.state.points2;
                this.setState({
                    points2: points2 += 1
                })
                break;
            case 3:
                let points3 = this.state.points3;
                this.setState({
                    points3:points3 += 1    
        
                })

                break;
            case 4:
                let points4 = this.state.points4;
                this.setState({
                    points4:points4 += 1
                })
                break;
            default:
                console.log();
        }


 


    }

    answer_generation = () => {
        for (let j in this.state.array_player_answer) {
            this.state.player_answser_ref.push(this.state.array_player_answer[j]);
        }
        console.log(this.state.player_answser_ref);

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

    componentDidMount() {
        this.answer_generation();
    }


    render() {
        console.log(" SCORE : ", this.state);
        return (
            <div className="container d-flex flex-column justify-content-around answer-group">
                <div className="game-card">
                    <h4>Il était tout nu .retgretretre treergergergergergerg erg erg erg erg ergre trete..</h4>
                </div>

                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward}><p>{this.state.randomDescription[0]}</p></button>

                </div>

                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward} ><p>{this.state.randomDescription[1]}</p></button>

                </div>
                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward}><p>{this.state.randomDescription[2]}</p></button>

                </div>
                <div className="player-card">
                    <button className="player-button" onClick={this.handleAward}><p>{this.state.randomDescription[3]}</p></button>
                </div>

                <Link to="/Choice"><button className="btn btn-primary next-round"> Manche suivante</button></Link>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        points1:state.points1
    })
}

export default connect(mapStateToProps)(Answer);