import { Board } from "./Board.js"
import { Cell } from "./Cell.js"

export class GameOfLife {
  private board: Board

  public constructor(board: boolean[][]) {
    this.board = new Board(board.map((row) => row.map((isAlive) => Cell.create(isAlive))))
  }

  public nextGen(): void {
    this.board = this.board.map((cell, neighbors) => {
      if (neighbors.deadAmount() === 6 && cell.isAlive()) {
        return Cell.alive()
      }

      return Cell.dead()
    })
  }
}
