import React, { Component, Fragment } from 'react'
import './Game.css'
import * as ROT from 'rot-js/dist/rot.js'
import {startScreen} from '../screens/startScreen'

const game = {
    display: null,

    init() {
        this.display = new ROT.Display({
            width: 40,
            height: 40,
            forceSquareRatio: true
        });
        document.getElementById('display').appendChild(this.display.getContainer())
        const bindEventToScreen = event => {
            window.addEventListener(event, e => {
                if(this.currentScreen !== null){
                    this.currentScreen.handleInput(event, e)
                }
            })
        }
        bindEventToScreen('keydown')
        bindEventToScreen('keyup')
        bindEventToScreen('keypress')
        this.switchScreen(startScreen)
    },
    start(){
        
    },
    switchScreen(screen){
        if(this.currentScreen !== null && this.currentScreen !== undefined){
            this.currentScreen.exit()
        }
        this.display.clear()
        this.currentScreen = screen
        this.currentScreen.enter(this)
        this.refresh()
    },
    refresh(){
        this.display.clear()
        this.currentScreen.render(this.display)
    }

}

class GamePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            game: game,
        }
    }
    componentDidMount() {
        this.state.game.init()
    }
    
    render(){
        
        return(
            <Fragment>
                <div id="display" />
            </Fragment>
        )
    }
}

export default GamePage