import { describe, it, expect } from "vitest"
import { Neighbors } from "./Neighbors.js"
import { Cell } from "./Cell.js"

describe("Neighbors", () => {
  it("throws a error if the number of neightbors is less than 8", () => {
    expect(
      () => new Neighbors([Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()]),
    ).toThrow()
  })
})
