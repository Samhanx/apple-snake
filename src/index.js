import 'normalize.css'
import './style.css'
import Block from './scripts/Block'

const l = console.log.bind(console)

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width
const height = canvas.height

let sampleBlock = new Block(3, 4)
sampleBlock.drawSquare(ctx, 'LightBlue')

let sampleCircle = new Block(8, 10)
sampleCircle.drawCircle(ctx, 'LightGreen')
