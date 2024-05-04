import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js";

describe("GameOfLife", () => {
  it("runs an iteration on a simple board", () => {
    const gameOfLife = new GameOfLife([
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ])

    gameOfLife.nextGen()

    expect(gameOfLife).toEqual(new GameOfLife([
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ]))
  })

  it("runs an iteration on a simple board 2", () => {
    const gameOfLife = new GameOfLife([
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ])

    gameOfLife.nextGen()

    expect(gameOfLife).not.toEqual(new GameOfLife([
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ]))
  })
})
