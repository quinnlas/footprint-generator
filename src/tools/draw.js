import conf from '../conf'

export default function draw (canvasID) {
    const c = document.getElementById(canvasID).getContext('2d')

    clear(c)

    c.strokeStyle = 'grey'
    c.lineWidth = 1
    drawGrid(c)

    // draw shapes
    c.strokeStyle = 'black'
    c.lineWidth = conf.pixelsPerBlock - 2

    const numShapes = conf.shapes

    for (let i = 0; i < numShapes; i++) {
        drawRandomShape(c)
    }
}

function clear(c) {
    c.clearRect(0, 0, 1000000, 1000000)
}

function drawGrid(c) {
    for (let blockCol = 1; blockCol < conf.width; blockCol++) {
        const x = blockCol * conf.pixelsPerBlock
        // draw the left side of each block
        c.beginPath()
        c.moveTo(x, 0)
        c.lineTo(x, conf.height * conf.pixelsPerBlock)
        c.stroke()
    }
    for (let blockRow = 1; blockRow < conf.height; blockRow++) {
        const y = blockRow * conf.pixelsPerBlock
        // draw the top side of each block
        c.beginPath()
        c.moveTo(0, y)
        c.lineTo(conf.width * conf.pixelsPerBlock, y)
        c.stroke()
    }
}

// inclusive on both sides
function randomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function drawRandomShape(c) {
    // determine size
    const widthBlock = randomIntInRange(conf.min, conf.max)
    const heightBlock = randomIntInRange(conf.min, conf.max)

    // subtract 1 here because we are drawing at the halfblock mark and the border width will make it the right size
    const widthPixel = (widthBlock - 1) * conf.pixelsPerBlock
    const heightPixel = (heightBlock - 1) * conf.pixelsPerBlock

    // determine spot in minecraft blocks
    // blocks numbered from 0
    const xBlock = randomIntInRange(0, conf.width - widthBlock)
    const yBlock = randomIntInRange(0, conf.height - heightBlock)
    const xPixel = xBlock * conf.pixelsPerBlock + conf.pixelsPerBlock / 2
    const yPixel = yBlock * conf.pixelsPerBlock + conf.pixelsPerBlock / 2

    console.log({ xBlock, widthBlock, xPixel, widthPixel})

    // draw
    c.strokeRect(xPixel, yPixel, widthPixel, heightPixel)
}