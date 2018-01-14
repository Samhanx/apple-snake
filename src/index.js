import 'normalize.css'
import './style.css'
import Snake from './scripts/Snake'

const l = console.log.bind(console)

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

let snake = new Snake(ctx)

let canvasTimer = setInterval(() => {
  ctx.clearRect(0, 0, width, height)
  snake.move()
  snake.draw()
}, 300)

document.addEventListener('keydown', event => {
  const directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'stop'
  }
  const direction = directions[event.keyCode]
  if (direction === 'stop') {
    clearInterval(canvasTimer)
  } else if (direction) {
    snake.setDirection(direction)
  }
})
