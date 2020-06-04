let inputDirections = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener("keydown", e => {
    switch (e.key) {
        case 'k': case 'ArrowUp':
            lastInputDirection.y !== 0 ? null : inputDirections = { x: 0, y: -1 }
            break;
        case 'j': case 'ArrowDown':
            lastInputDirection.y !== 0 ? null : inputDirections = { x: 0, y: 1 }
            break
            case 'a': case 'h': case 'ArrowLeft':
            lastInputDirection.x !== 0 ? null : inputDirections = { x: -1, y: 0 }
            break;
        case 'l': case 'ArrowRight':
            lastInputDirection.x !== 0 ? null : inputDirections = { x: 1, y: 0 }
            break;
    }
})

export function getInputDirections() {
    lastInputDirection = inputDirections
    return inputDirections
}