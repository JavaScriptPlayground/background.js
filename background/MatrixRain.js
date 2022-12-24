export class MatrixRain {
    // private
    #canvas
    #ctx
    #characters
    #fontSize
    #fontColor
    #fadeColor
    #fps
    #symbols
    #currentTime
    #lastTime
    #timer
    #columns
    #offset

    /**
     * @param {HTMLCanvasElement} canvas
     * @param {{characters : string, fontSize : number, fontColor : string, fadeColor : string, fps : number}} options
     */
    constructor(canvas, options) {
        this.#canvas = canvas
        this.#ctx = canvas.getContext('2d')
        this.#characters = options?.characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"\'<>|#*~+-/\\{}[]()%&$@^;: '
        this.#fontSize = options?.fontSize || 20
        this.#fontColor = options?.fontColor || '#0aff0a'
        this.#fadeColor = options?.fadeColor || 'rgba(0, 0, 0, 0.05)'
        this.#fps = options?.fps || 15

        // initialize
        this.#init()
        
        // start animation loop
        this.#animate()
    }

    /**
     * @function #init
     */
    #init() {
        // style
        this.#ctx.font = this.#fontSize + 'px monospace'

        // character symboles
        this.#symbols = []

        // delay
        this.#currentTime = 0
        this.#lastTime = 0
        this.#timer = 0

        // calculate: columns, offset
        this.#columns = Math.floor(this.#canvas.width / this.#fontSize)
        this.#offset = Math.round(this.#canvas.width % this.#columns / 2 + (this.#fontSize - this.#ctx.measureText(' ').width) / 2)

        // create symbols
        for (let columnIndex = 0; columnIndex < this.#columns; columnIndex++) {
            this.#symbols[columnIndex] = new Symbol(
                columnIndex,
                this.#canvas.height
            )
        }
    }

    /**
     * @function #animate
     */
    #animate() {
        const deltaTime = this.#currentTime - this.#lastTime

        if (this.#timer > 60 / this.#fps) {
            this.#ctx.fillStyle = this.#fadeColor
            this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)
            this.#symbols.forEach((symbol) => symbol.draw(
                this.#canvas,
                this.#offset,
                this.#fontSize,
                this.#characters,
                this.#fontColor)
            )
            this.#timer = 0
            
        } else {
            this.#timer += deltaTime
        }
        
        this.#lastTime = this.#currentTime
        this.#currentTime = window.requestAnimationFrame(() => {
            this.#animate()
        })
    }

    /**
     * @function resize
     * @param {number} width
     * @param {number} height
     */
    resize(width, height) {
        this.#canvas.width = width
        this.#canvas.height = height

        this.#init()
    }
}

class Symbol {
    // private
    #columnIndex
    #rowIndex

    /**
     * @param {number} columnIndex
     * @param {number} rowIndex
     */
    constructor(columnIndex, rowIndex) {
        this.#columnIndex = columnIndex
        this.#rowIndex = rowIndex
    }

    /**
     * @function draw
     * @param {HTMLCanvasElement} canvas
     * @param {number} offset
     * @param {number} fontSize
     * @param {string} characters
     * @param {string} color
     */
    draw(canvas, offset, fontSize, characters, color) {
        const ctx = canvas.getContext('2d')
        // set color of character
        ctx.fillStyle = color
        
        // set random character
        const symbols = [...characters]
        ctx.fillText(
            symbols[Math.floor(Math.random() * symbols.length)],
            (this.#columnIndex * fontSize) + offset,
            this.#rowIndex * fontSize
        )
        
        // check for canvas end
        if (this.#rowIndex * fontSize > canvas.height && Math.random() > 0.95) {
            this.#rowIndex = 0
        } else {
            this.#rowIndex++
        }
    }
}
