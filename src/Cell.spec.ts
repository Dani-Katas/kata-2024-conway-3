import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"
import { Neighbors } from "./Neighbors.js"

describe("Cell", () => {
  it("can be created alive", () => {
    const cell = Cell.alive()

    const isAlive = cell.isAlive()

    expect(isAlive).toBe(true)
  })

  it("can be created dead", () => {
    const cell = Cell.dead()

    const isAlive = cell.isAlive()

    expect(isAlive).toBe(false)
  })

  describe("when is alive", () => {
    const aliveCell = Cell.alive()

    it("dies with 0 neighbors because of under-population", () => {
      const neighbors = Neighbors.allDead()

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })

    it("dies with 1 neighbors because of under-population", () => {
      const neighbors = Neighbors.withAliveAmount(1)

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })

    it("remains alive with 2 neighbors", () => {
      const neighbors = Neighbors.withAliveAmount(2)

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isAlive()).toBe(true)
    })

    it("remains alive with 3 neighbors", () => {
      const neighbors = Neighbors.withAliveAmount(3)

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isAlive()).toBe(true)
    })
  })
})
