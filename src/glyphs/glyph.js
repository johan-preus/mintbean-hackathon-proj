export default class Glyph {
    constructor(properties = {}) {
        this.char = properties.char || ""
        this.foreground = properties.foreground || "#fff"
        this.background = properties.background || "#000"
    }
}