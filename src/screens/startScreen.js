import * as ROT from 'rot-js'

export const startScreen = {
    enter(){

    },
    exit(){

    },
    render(display){
        console.log(display)
        display.drawText(1, 2, '%c{#98ff98}Welcome to Dungeon Crawl Mint Soup!')
        display.drawText(display._options.width / 2 - 6, 4, 'Press enter')
    },
    handleInput(inputType, inputData){
        if(inputType === 'keydown'){
            if(inputData.keyCode === ROT.KEYS.VK_RETURN){
                
            }
        }
    }
}