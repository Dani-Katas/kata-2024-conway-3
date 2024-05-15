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

  it("can be compared by not equal", () => {
    const dead = Cell.dead()
    const alive = Cell.alive()

    expect(dead).not.toEqual(alive)
  })

  it("can be compared by equal", () => {
    const dead1 = Cell.dead()
    const dead2 = Cell.dead()

    expect(dead1).toEqual(dead2)
  })

  describe("when is alive", () => {
    const aliveCell = Cell.alive()

    it("is not dead", () => {
      expect(aliveCell.isDead()).toBe(false)
    })

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

    it("dies with 4 neighbors because of overcrowding", () => {
      const neighbors = Neighbors.withAliveAmount(4)

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })

    it("dies with 8 neighbors because of overcrowding", () => {
      const neighbors = Neighbors.withAliveAmount(8)

      const nextCell = aliveCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })
  })

  describe("when is dead", () => {
    const deadCell = Cell.dead()

    it("is dead", () => {
      expect(deadCell.isDead()).toBe(true)
    })

    it("revives with exactly 3 neighbors", () => {
      const neighbors = Neighbors.withAliveAmount(3)

      const nextCell = deadCell.nextGeneration(neighbors)

      expect(nextCell.isAlive()).toBe(true)
    })

    it("remains dead with 2 neighbors", () => {
      const neighbors = Neighbors.withAliveAmount(2)

      const nextCell = deadCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })

    it("remains dead with 4 neighbors", () => {
      const neighbors = Neighbors.withAliveAmount(4)

      const nextCell = deadCell.nextGeneration(neighbors)

      expect(nextCell.isDead()).toBe(true)
    })
  })
})
