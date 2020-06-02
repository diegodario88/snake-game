import {SNAKE_SPEED, draw as drawSnake, update as updateSnake} from './config.js';
let lastRenderTime
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    console.log('GAME IS ON - 🎮');
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}