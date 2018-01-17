import config from '../config.js'
import Block from './Block'

export default class Snake {
  constructor(canvasCtx, canvasWidth, canvasHeight) {
    this.ctx = canvasCtx
    this.segments = [
      new Block(7, 5),
      new Block(6, 5),
      new Block(5, 5)
    ]
    this.direction = 'right'
    this.nextDirection = 'right'
  }

  draw() {
    this.segments.forEach(block => block.drawSquare(this.ctx, config.snakeColor))
  }

  move() {
    let head = this.segments[0]
    let newHead

    this.direction = this.nextDirection

    switch (this.direction) {
      case 'left': 
        newHead = new Block(head.col - 1, head.row)
        break
      case 'right':
        newHead = new Block(head.col + 1, head.row)
        break
      case 'up':
        newHead = new Block(head.col, head.row - 1)
        break
      case 'down':
        newHead = new Block(head.col, head.row + 1)
        break
    }
    this.segments.unshift(newHead)
    this.segments.pop()
  }

  setDirection(direction) {
    const negative = config.negativeDirections[this.direction]
    if (direction === this.direction || direction === negative) {
      return
    }
    this.nextDirection = direction
  }

  checkCollision(head) {
    const leftCollision = head.col === 0
    const rightCollision = head.col === (canvasWidth / config.blockSize) - 1
    const topCollisiion = head.row === 0
    const bottomCollision = head.row === (canvasHeight / config.blockSize) - 1
    const isCollision = leftCollision || rightCollision || topCollisiion || bottomCollision
    if (isCollision) return isCollision

    let selfCollision = false
    this.segments.forEach(segment => {
      if (head.isEqual(segment)) {
        selfCollision = true
      }
    })

    return selfCollision
  }
}