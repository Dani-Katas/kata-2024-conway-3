import { setTimeout } from "timers/promises"
import { GameOfLife } from "./GameOfLife.js"

const board = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, true, false, false, false, false, false],
  [false, false, false, true, true, true, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
]

const gameOfLife = new GameOfLife(board)

console.clear()
console.log(gameOfLife.toString())

while (true) {
  await setTimeout(500)
  gameOfLife.nextGen()
  console.clear()
  console.log(gameOfLife.toString())
}
