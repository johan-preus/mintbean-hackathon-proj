import * as ROT from 'rot-js'
import {playScreen} from './playScreen'

export const startScreen = {
    enter(game){
        this.game = game
        game.start()
    },
    exit(){

    },
    render(display){
        display.drawText(3, 6, '%c{#98ff98}Welcome to Dungeon Crawl Mint Soup!')
        display.drawText(display._options.width / 2 - 6, 14, 'Press [enter]')
    },
    handleInput(inputType, inputData){
        if(inputType === 'keydown'){
            if(inputData.keyCode === ROT.KEYS.VK_RETURN){
                this.game.switchScreen(playScreen)
            }
        }
    }
}