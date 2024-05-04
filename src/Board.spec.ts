import { describe, it, expect } from "vitest"
import { Board } from "./Board.js"
import { Cell } from "./Cell.js"

describe("Board", () => {
  it("can map each cell", () => {
    const board = new Board([[true]])

    const newBoard = board.map(() => Cell.create(false))

    expect(newBoard).toEqual(new Board([[false]]))
  })
})
