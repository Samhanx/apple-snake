import Block from './Block'

export default class Snake {
  constructor(canvasCtx) {
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
    this.segments.forEach(block => block.drawSquare(this.ctx, 'purple'))
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
    const reverseDirs = {
      left: 'right',
      right: 'left',
      up: 'down',
      down: 'up'
    }
    if (direction === this.direction || direction === reverseDirs[this.direction]) {
      return
    }
    this.nextDirection = direction
  }
}