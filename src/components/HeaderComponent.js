import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class GamePage extends Component {
    render(){
        return(
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/play">Play</NavLink>
            </div>
        )
    }
}

export default GamePage