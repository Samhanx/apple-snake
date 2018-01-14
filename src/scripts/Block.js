export default class Block {
  constructor(col, row) {
    this.col = col
    this.row = row
    this.blockSize = 10
  }

  drawSquare(canvasCtx, color) {
    const x = this.col * this.blockSize
    const y = this.row * this.blockSize
    canvasCtx.fillStyle = color
    canvasCtx.fillRect(x, y, this.blockSize, this.blockSize)
  }

  drawCircle(canvasCtx, color) {
    const radius = this.blockSize / 2
    const centerX = this.col * this.blockSize + radius
    const centerY = this.row * this.blockSize + radius
    canvasCtx.fillStyle = color
    canvasCtx.beginPath()
    canvasCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, false)
    canvasCtx.fill()
  }

  isEqual(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row
  }
}