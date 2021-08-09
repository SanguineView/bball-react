import React, { Component } from 'react';
import './Ball-player.css'

class BallPlayer extends Component {
    state = {
        plyrScore: 0
    }
    shootShot = (e) => {
        this.setState((prevState) => {
            return {
                plyrScore: prevState.plyrScore + 1
            }
        })
    }
    handleClick = (e) => {
        this.shootShot()
    }
    componentDidUpdate() { 
        if (this.state.plyrScore === 11) {
            alert(`Game over! ${this.props.name} won!`)
            this.setState((prevState) => {
                return {
                    plyrScore: 0
                }
            })
        }
     }
    render() { 
        return ( 
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.age}</p>
                <div className="BallPlayer-score">{this.state.plyrScore}</div>
                <button onClick={this.handleClick}>Shoot</button>
            </div>
        );
    }
}
 
export default BallPlayer;