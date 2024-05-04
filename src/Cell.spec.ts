import { describe, it, expect } from "vitest"
import { Cell } from "./Cell.js";

describe("Cell", () => {
  it("can be created from a boolean", () => {
    const cell = Cell.create(true);

    const isAlive = cell.isAlive()

    expect(isAlive).toBe(true)
  })
})
