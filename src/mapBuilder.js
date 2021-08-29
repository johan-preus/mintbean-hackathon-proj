import * as ROT from 'rot-js'
import { floorTile } from './glyphs/floorTile'
import { wallTile } from './glyphs/wallTile'

export default class MapBuilder {
    constructor(game){
        this.game = game
    }
    generateLevel(){
        const map = new Array(this.game.width + 2)
        for(let w = 0; w < this.game.width + 2; w++){
            map[w] = new Array(this.game.height + 2)
        }
        const generator = new ROT.Map.Cellular(this.game.width, this.game.height, {connected: true})
        generator.randomize(0.5)
        const totalIterations = 3
        for(let i = 0; i < totalIterations; i++){
            generator.create()
        }
        generator.create()
        generator.connect(null, 1)
        const wallArr = []
        for(let i = 0; i < this.game.height + 2; i++){
            wallArr.push(0)
        }
        for(let i = 0; i < generator._map.length; i++){
            generator._map[i].unshift(0)
            generator._map[i].push(0)
        }
        generator._map.unshift(wallArr)
        generator._map.push(wallArr)
        
        generator._map.forEach((arr, x) => {
            arr.forEach((value, y) => {
                if(value === 1){
                    map[x][y] = floorTile
                } else {
                    map[x][y] = wallTile
                }
            })
        })
        return map
    }
}