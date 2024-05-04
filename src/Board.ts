import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Board {
  private cells: Cell[][]

  public constructor(board: boolean[][] | Cell[][]) {
    this.cells = board.map((row) =>
      row.map((isAlive) => {
        if (isAlive instanceof Cell) {
          return isAlive
        }

        return Cell.create(isAlive)
      }),
    )
  }

  map(callback: (cell: Cell, neighbors: Cell[]) => Cell): Board {
    const cells = this.cells.map((r, row) =>
      r.map((cell, column) => callback(cell, this.getNeighbors(Coordinates.at(row, column)))),
    )
    return new Board(cells)
  }

  getNeighbors(coordinates: Coordinates) {
    return coordinates.getNeighbors().map((coordinates) => coordinates.getFrom(this.cells))
  }
}
