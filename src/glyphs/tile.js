import Glyph from "./glyph"

export default class Tile extends Glyph {
    constructor(properties = {}) {
        super(properties)
        this.isWalkable = properties.isWalkable || false
    }
}