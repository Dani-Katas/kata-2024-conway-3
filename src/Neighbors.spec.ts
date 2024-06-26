import { describe, it, expect } from "vitest"
import { Neighbors } from "./Neighbors.js"
import { Cell } from "./Cell.js"

describe("Neighbors", () => {
  it("throws a error if the number of neighbors is less than 8", () => {
    const cells = [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()]

    expect(() => new Neighbors(cells)).toThrow()
  })

  it("does not throw with 8 neighbors", () => {
    const cells = [
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ]

    expect(() => new Neighbors(cells)).not.toThrow()
  })

  it("throws with 9 neighbors", () => {
    const cells = [
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ]

    expect(() => new Neighbors(cells)).toThrowError("There bust be 8 neighbors")
  })

  it("counts the amount of dead cells", () => {
    const neighbors = Neighbors.allAlive()

    const deadAmount = neighbors.deadAmount()

    expect(deadAmount).toBe(0)
  })

  it("can be created with an alive amount", () => {
    const neighbors = Neighbors.withAliveAmount(3)

    const hasThreeAlive = neighbors.hasThreeAlive()

    expect(hasThreeAlive).toBe(true)
  })
})
