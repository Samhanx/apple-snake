export default {
  speed: 300,
  blockSize: 10,
  snakeColor: 'lightgreen',
  appleColor: 'tomato',
  borderColor: 'gray',
  directions: {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    32: 'pause'
  },
  negativeDirections: {
    left: 'right',
    right: 'left',
    up: 'down',
    down: 'up'
  }
}