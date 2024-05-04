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

    expect(() => new Neighbors(cells)).toThrow()
  })
})
