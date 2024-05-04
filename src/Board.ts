import { Cell } from "./Cell.js"

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
    return [
      this.board[0][0],
      this.board[0][1],
      this.board[0][2],
      this.board[1][0],
      this.board[1][2],
      this.board[2][0],
      this.board[2][1],
      this.board[2][2],
    ]
  }
}
