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
    return new Board(
      this.board.map((r, row) =>
        r.map((cell, column) => callback(cell, this.getNeighbors(Coordinates.at(row, column)))),
      ),
    )
  }

  getNeighbors(coordinates: Coordinates) {
    return coordinates.getNeighbors().map((coordinates) => coordinates.getFrom(this.board))
  }
}
