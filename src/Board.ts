import { Cell } from "./Cell.js"

export class Board {
  private board: Cell[][]

  public constructor(board: boolean[][]) {
    this.board = board.map((row) => row.map((isAlive) => Cell.create(isAlive)))
  }

  map(callback: (cell: Cell, neighbors: Cell[]) => Cell): Board {
    return new Board(this.board.map(r => r.map((cell) => false)))
  }
}
