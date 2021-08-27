import * as ROT from 'rot-js'

export const playScreen = {
    enter(game){
        this.game = game
        
    },
    exit(){

    },
    render(display){
        display.drawText(1, 1, 'Playing the game!')
    },
    handleInput(inputType, inputData){
        if(inputType === 'keydown'){
            if(inputData.keyCode === ROT.KEYS.VK_RETURN){
                
            }
        }
    }
}