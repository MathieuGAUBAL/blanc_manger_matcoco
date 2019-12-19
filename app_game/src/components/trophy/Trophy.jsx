import React, { Component } from 'react';
import './Trophy.css';

class Trophy extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    }
    render() {
        return (
            <div className="blabla">
                {/* Avatar du gagnant */}
                
                <div className='d-flex-column mx-auto winner-card'>
                    <img className='card-img-top' src="https://i.chzbgr.com/full/9112752128/h94C6655E/cute-cat-looking-at-the-camera-with-its-ears-hiding" alt="card image"/>
                    <div className='card-body'>
                        <h4 className='card-title'>Felix, fucking weird cat</h4>
                        <p className='card-text'>You won the prize but you're still retarded.</p>
                    </div>
                </div>

                {/* Trophée */}

                <div className='d-flex mx-auto trophy-image'>
                <img className='card-img-top' src="https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_960_720.png" alt="card image"/>
                </div>

                {/* Bouton pour rejouer une partie */}

                <div className='d-flex justify-content-center'>
                    <a href="#" class="btn btn-danger" role="button">Relancer une partie !</a>
                </div>
            </div>
        )
    }
}

export default Trophy;