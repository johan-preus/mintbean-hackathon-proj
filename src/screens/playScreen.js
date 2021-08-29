import * as ROT from 'rot-js'

export const playScreen = {
    enter(game){
        this.game = game
    },
    exit(){

    },
    render(display){
        for(let x = 0; x < this.game.width + 2; x++){
            for(let y = 0; y < this.game.height + 2; y++){
                const tile = this.game.map.getTile(x, y)
                display.draw(
                    x,
                    y,
                    tile.char,
                    tile.foreground,
                    tile.background
                )
            }
        }
    },
    handleInput(inputType, inputData){
        if(inputType === 'keydown'){
            if(inputData.keyCode === ROT.KEYS.VK_RETURN){
                
            }
        }
    }
}