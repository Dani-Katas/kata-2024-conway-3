import { Cell } from "./Cell.js"
import { Coordinates } from "./Coordinates.js"
import { Neighbors } from "./Neighbors.js"

export class Board {
  private readonly cells: Cell[][]

  public constructor(cells: Cell[][]) {
    this.cells = cells
  }

  map(callback: (cell: Cell, neighbors: Neighbors) => Cell): Board {
    const cells = this.cells.map((r, row) =>
      r.map((cell, column) => callback(cell, this.getNeighbors(Coordinates.at(row, column)))),
    )
    return new Board(cells)
  }

  getNeighbors(coordinates: Coordinates) {
    const cells = coordinates.getNeighbors().map((coordinates) => coordinates.getFrom(this.cells))

    return new Neighbors(cells)
  }
}
