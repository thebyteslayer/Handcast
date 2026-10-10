import type { Die, Hand } from './types'

function rollDie(): Die {
    return Math.floor((Math.random() * 6) + 1) as Die
}

function rollHand(): Hand {
    return [
        rollDie(),
        rollDie(),
        rollDie(),
        rollDie(),
        rollDie()
    ]
}

// console.log(rollHand())
// console.log([...rollHand()].sort((a, b) => a - b))

export { rollDie, rollHand }