import 'normalize.css'
import './style.css'
import config from './config'
import Snake from './scripts/Snake'
import Apple from './scripts/Apple'

const l = console.log.bind(console)

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

const drawBorder = () => {
  ctx.fillStyle = config.borderColor
  ctx.fillRect(0, 0, width, config.blockSize)
  ctx.fillRect(0, height - config.blockSize, width, config.blockSize)
  ctx.fillRect(0, 0, config.blockSize, height)
  ctx.fillRect(width - config.blockSize, 0, config.blockSize, height)
}

drawBorder()
let snake = new Snake(ctx, width, height)
let apple = new Apple(snake)

let canvasTimer = snake.timerId = setInterval(() => {
  ctx.clearRect(0, 0, width, height)
  snake.move()
  snake.draw()
  apple.draw()
  drawBorder()
}, config.speed)

document.addEventListener('keydown', event => {
  const direction = config.directions[event.keyCode]
  if (direction === 'stop') {
    clearInterval(canvasTimer)
  } else if (direction) {
    snake.setDirection(direction)
  }
})
