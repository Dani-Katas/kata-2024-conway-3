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

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = column - 1; j <= column + 1; j++) {
        if (i === row && j === column) {
          continue
        }

        neighbors.push(this.getCellAt(i, j))
      }
    }

    return neighbors
  }

  private getCellAt(i: number, j: number) {
    if (i < 0 || j < 0) {
      return Cell.dead()
    }

    if (i >= this.board.length || j >= this.board.length) {
      return Cell.dead()
    }

    return this.board[i][j]
  }
}
