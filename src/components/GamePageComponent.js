import React, { Component, Fragment } from 'react'
import './Game.css'
import * as ROT from 'rot-js/dist/rot.js'
import {startScreen} from '../screens/startScreen'
import MapBuilder from '../mapBuilder'
import Map from '../map'

const game = {
    display: null,
    width: 40,
    height: 40,

    init() {
        this.display = new ROT.Display({
            width: this.width + 2,
            height: this.height + 2,
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
        const mapBuilder = new MapBuilder(this)
        const map = mapBuilder.generateLevel()
        this.map = new Map(map, null)
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