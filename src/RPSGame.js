import React, {Component} from 'react'

class RPSGame extends Component {
    static defaultProps = {
        throws: ['Rock', 'Paper', 'Scissor']
    }
    render() {
        return (
            <div>
                <h1>Da Game</h1>
            </div>
        )
    }
}

export default RPSGame