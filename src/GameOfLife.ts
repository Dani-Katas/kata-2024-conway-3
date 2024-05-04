import { Cell } from "./Cell.js";

export class GameOfLife {
  private board: Cell[][];

  public constructor(board: boolean[][]) {
    this.board = board.map(row => row.map(isAlive => Cell.create(isAlive)))
  }

  public nextGen(): void {

  }
}
