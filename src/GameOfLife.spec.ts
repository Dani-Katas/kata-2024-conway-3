import { describe, it, expect } from "vitest"
import { GameOfLife } from "./GameOfLife.js"

describe("GameOfLife", () => {
  it("runs an iteration on a simple board", () => {
    const gameOfLife = new GameOfLife([
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ])

    gameOfLife.nextGen()

    expect(gameOfLife).toEqual(
      new GameOfLife([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]),
    )
  })

  it("keeps statics if everyone have two neighbors", () => {
    const gameOfLife = new GameOfLife([
      [true, true, false],
      [true, true, false],
      [false, false, false],
    ])

    gameOfLife.nextGen()

    expect(gameOfLife).toEqual(
      new GameOfLife([
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ]),
    )
  })

  it("computes next generation", () => {
    const gameOfLife = new GameOfLife([
      [true, false, false],
      [true, true, false],
      [false, false, false],
    ])

    gameOfLife.nextGen()

    expect(gameOfLife).toEqual(
      new GameOfLife([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ]),
    )
  })
})
