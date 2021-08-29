import { nullTile } from "./glyphs/nullTile"

export default class Map {
    constructor(tiles, player){
        this.tiles = tiles
        this.player = player
    }
    getTile(x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return nullTile
        return this.tiles[x][y] || nullTile
    }
}