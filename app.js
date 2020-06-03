import { SNAKE_SPEED, getSnakeHead, snakeIntersection, draw as drawSnake, update as updateSnake } from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { outsideGrid } from './grid.js'

let lastRenderTime
let gameOver
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    
    if (gameOver) {
       if (confirm('You lost. Press ok to restart.')) {
           window.location = '/'
       }
       return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    console.log('GAME IS ON ▶️ 🎮');
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(params) {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}