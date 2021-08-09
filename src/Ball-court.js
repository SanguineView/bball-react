import React, { Component } from 'react';
import BallPlayer from './Ball-player'
import './Ball-court.css'

class BallCourt extends Component {
    state = {
        players: [{
            name: 'wilt',
            age: 25,
            shot:false
        },
        {
            name:'jordan',
            age:29,
            shot:false
        }
        ]
    }
    render() { 
        return ( 
            <div>
                <h1>Game 7</h1>
                <div className="BallCourt-players">
                    {this.state.players.map((player) => <BallPlayer {...player}/>)}
                </div>
            </div>
         );
    }
}
 
export default BallCourt;