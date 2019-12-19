import React, { Component } from "react";
import "./Trophy.css";
import { connect } from "react-redux";

class Trophy extends Component {
  constructor(props) {
    super(props);
    this.state = [];
  }
  render() {
    return (
      <div className='blabla'>
        {/* Avatar du gagnant */}

        <div className='d-flex-column mx-auto winner-card'>
          <img
            className='card-img-top'
            src='https://i.chzbgr.com/full/9112752128/h94C6655E/cute-cat-looking-at-the-camera-with-its-ears-hiding'
            alt='card image'
          />
          <div className='card-body'>
            <h4 className='card-title'>{this.props.winnername1}</h4>
            <h4>{this.props.winnername2}</h4>
            <h4>{this.props.winnername3}</h4>
            <h4>{this.props.winnername4}</h4>
            <p className='card-text'>Félicitations</p>
          </div>
        </div>

        {/* Trophée */}

        <div className='d-flex mx-auto trophy-image'>
          <img
            className='card-img-top'
            src='https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_960_720.png'
            alt='card image'
          />
        </div>

        {/* Bouton pour rejouer une partie */}

        <div className='d-flex justify-content-center'>
          <a href='#' class='btn btn-danger' role='button'>
            Relancer une partie !
          </a>
        </div>
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
    winnername4: state.winnername4
  };
};

export default connect(mapStateToProps)(Trophy);
