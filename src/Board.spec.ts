import { describe, it, expect } from "vitest"
import { Board } from "./Board.js"
import { Cell } from "./Cell.js"

describe("Board", () => {
  describe("map", () => {
    it("changes to a dead cell", () => {
      const board = new Board([[Cell.alive()]])

      const newBoard = board.map(() => Cell.dead())

      expect(newBoard).toEqual(new Board([[Cell.dead()]]))
    })

    it("changes to an alive cell", () => {
      const board = new Board([[Cell.dead()]])

      const newBoard = board.map(() => Cell.alive())

      expect(newBoard).toEqual(new Board([[Cell.alive()]]))
    })
  })
})
