import React, { Component } from 'react';
import './Boxes.css'

class Boxes extends Component {
    state = { 
        numBoxes: 16
    }
    render() { 
        return ( 
            <div className="Boxes">
                <div className="Boxes-box" style={{backgroundColor:this.props.colors[Math.floor(Math.random() * this.props.colors.length)]}}
                >
                </div>
            </div>
         );
    }
}
 
export default Boxes;