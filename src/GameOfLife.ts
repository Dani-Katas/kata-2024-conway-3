import { Board } from "./Board.js"
import { Cell } from "./Cell.js"

export class GameOfLife {
  private board: Cell[][]
  private board2: Board

  public constructor(board: boolean[][]) {
    this.board = board.map((row) => row.map((isAlive) => Cell.create(isAlive)))
    this.board2 = new Board(board)
  }

  public nextGen(): void {
    this.board = this.board.map((row) => row.map((cell) => Cell.create(false)))
    this.board2 = this.board2.map((cell, neighbors) => cell.nextGen(neighbors))
  }
}
