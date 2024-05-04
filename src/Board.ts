import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"

export class Board {
  private readonly cells: Cell[][]

  public constructor(cells: Cell[][]) {
    this.cells = cells
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
