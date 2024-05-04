import { describe, expect, it, vi } from "vitest"
import { Board } from "./Board.js"
import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

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

    it("sends the given cell to the callback", () => {
      const board = new Board([[Cell.alive()]])
      const spy = vi.fn()

      board.map((cell) => spy(cell))

      expect(spy).toHaveBeenCalledWith(Cell.alive())
    })
  })

  describe("getNeighbors", () => {
    it("retrieves the neighbors of the given index", () => {
      const board = new Board([
        [Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.alive(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead()],
      ])

      const neighbors: Cell[] = board.getNeighbors(Coordinates.at(1, 1))

      expect(neighbors).toEqual([
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
      ])
    })

    it("retrieves the neighbors in a bigger board", () => {
      const board = new Board([
        [Cell.alive(), Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.alive(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()],
      ])

      const neighbors: Cell[] = board.getNeighbors(Coordinates.at(2, 2))

      expect(neighbors).toEqual([
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
        Cell.dead(),
      ])
    })

    it("retrieves dead cells if overflows the board on negative index", () => {
      const board = new Board([
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
      ])

      const neighbors: Cell[] = board.getNeighbors(Coordinates.at(0, 0))

      expect(neighbors.filter((cell) => !cell.isAlive())).toHaveLength(5)
    })

    it("retrieves dead cells if overflows the board on positive index", () => {
      const board = new Board([
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
      ])

      const neighbors: Cell[] = board.getNeighbors(Coordinates.at(2, 2))

      expect(neighbors.filter((cell) => !cell.isAlive())).toHaveLength(5)
    })
  })
})
