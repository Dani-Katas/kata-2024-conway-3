import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js"

describe("Cell", () => {
  it("can be created alive", () => {
    const cell = Cell.create(true)

    const isAlive = cell.isAlive()

    expect(isAlive).toBe(true)
  })

  it("can be created dead", () => {
    const cell = Cell.create(false)

    const isAlive = cell.isAlive()

    expect(isAlive).toBe(false)
  })
})
