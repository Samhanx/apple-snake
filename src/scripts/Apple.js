import config from '../config.js'
import Block from './Block'

export default class Apple {
  constructor(snake) {
    this.ctx = snake.ctx
    this.right = snake.right
    this.bottom = snake.bottom
    this.snakeSegments = snake.segments
    this.position = new Block(10, 10)
    snake.targetApple = this
  }

  draw() {
    this.position.drawCircle(this.ctx, config.appleColor)
  }

  move() {
    const randomCol = Math.floor(Math.random() * (this.right / config.blockSize - 2)) + 1
    const randomRow = Math.floor(Math.random() * (this.bottom / config.blockSize - 2)) + 1
    const tempPosition = new Block(randomCol, randomRow)
    
    if (this.checkInSnake(tempPosition)) {
      this.move()
    } else {
      this.position = tempPosition
    }
  }

  checkInSnake(position) {
    return !this.snakeSegments.every(segment => !position.isEqual(segment))
  }
}
