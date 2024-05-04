import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Board {
  private board: Cell[][]

  public constructor(board: boolean[][] | Cell[][]) {
    this.board = board.map((row) =>
      row.map((isAlive) => {
        if (isAlive instanceof Cell) {
          return isAlive
        }

        return Cell.create(isAlive)
      }),
    )
  }

  map(callback: (cell: Cell, neighbors: Cell[]) => Cell): Board {
    return new Board(this.board.map((r) => r.map((cell) => callback(cell, []))))
  }

  getNeighbors(row: number, column: number) {
    const coordinates = new Coordinates(row, column)
    return coordinates.getNeighbors().map((coordinates) => this.getCellAt(coordinates))
  }

  private getCellAt(coordinates: Coordinates) {
    if (coordinates.getX() < 0 || coordinates.getY() < 0) {
      return Cell.dead()
    }

    if (coordinates.getX() >= this.board.length || coordinates.getY() >= this.board.length) {
      return Cell.dead()
    }

    return this.board[coordinates.getX()][coordinates.getY()]
  }
}
