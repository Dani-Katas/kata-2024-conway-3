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
    const neighbors: Cell[] = []

    for (let i = 0; i <= 2; i++) {
      for (let j = 0; j <= 2; j++) {
        if (i === row && j === column) {
          continue
        }

        neighbors.push(this.board[i][j])
      }
    }

    return neighbors
  }
}
