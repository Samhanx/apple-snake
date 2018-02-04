import config from '../config.js'
import Block from './Block'

export default class Snake {
  constructor(canvasCtx, canvasWidth, canvasHeight) {
    this.ctx = canvasCtx
    this.right = canvasWidth
    this.bottom = canvasHeight
    this.timerId = 0
    this.segments = [
      new Block(7, 5),
      new Block(6, 5),
      new Block(5, 5)
    ]
    this.direction = 'right'
    this.nextDirection = 'right'
    this.targetApple = null
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

    if (this.checkCollision(newHead)) {
      clearInterval(this.timerId)
      alert('Game Over')
      return
    }
    
    this.segments.unshift(newHead)
    if (this.targetApple && newHead.isEqual(this.targetApple.position)) {
      this.targetApple.move()
    } else {
      this.segments.pop()
    }
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
    const rightCollision = head.col === (this.right / config.blockSize) - 1
    const topCollisiion = head.row === 0
    const bottomCollision = head.row === (this.bottom / config.blockSize) - 1
    const isCollision = leftCollision || rightCollision || topCollisiion || bottomCollision

    return isCollision || !this.segments.every(segment => !head.isEqual(segment))
  }
}