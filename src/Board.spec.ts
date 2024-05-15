import { describe, expect, it, vi } from "vitest"
import { Board } from "./Board.js"
import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"
import { Neighbors } from "./Neighbors.js"

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

    it("sends the neighbors to the callback", () => {
      const board = new Board([[Cell.alive()]])
      const spy = vi.fn()

      board.map((cell, neighbors) => spy(neighbors))

      expect(spy).toHaveBeenCalledWith(Neighbors.allDead())
    })
  })

  describe("getNeighbors", () => {
    it("retrieves the neighbors of the given index", () => {
      const board = new Board([
        [Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.alive(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead()],
      ])

      const neighbors = board.getNeighbors(Coordinates.at(1, 1))

      expect(neighbors).toEqual(Neighbors.allDead())
    })

    it("retrieves the neighbors in a bigger board", () => {
      const board = new Board([
        [Cell.alive(), Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.alive(), Cell.dead()],
        [Cell.dead(), Cell.dead(), Cell.dead(), Cell.dead()],
      ])

      const neighbors = board.getNeighbors(Coordinates.at(2, 2))

      expect(neighbors).toEqual(Neighbors.allDead())
    })

    it("retrieves dead cells if overflows the board on negative index", () => {
      const board = new Board([
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
      ])

      const neighbors = board.getNeighbors(Coordinates.at(0, 0))

      expect(neighbors.deadAmount()).toBe(5)
    })

    it("retrieves dead cells if overflows the board on positive index", () => {
      const board = new Board([
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.alive()],
      ])

      const neighbors = board.getNeighbors(Coordinates.at(2, 2))

      expect(neighbors.deadAmount()).toBe(5)
    })

    it("can be transformed to string", () => {
      const board = new Board([
        [Cell.dead(), Cell.alive(), Cell.alive()],
        [Cell.alive(), Cell.dead(), Cell.alive()],
        [Cell.alive(), Cell.alive(), Cell.dead()],
      ])

      const result = board.toString()

      expect(result).toBe(" ◼◼\n◼ ◼\n◼◼ ")
    })
  })
})
