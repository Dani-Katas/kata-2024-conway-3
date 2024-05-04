import { Cell } from "./Cell.js"

export class Coordinates {
  public static at(row: number, column: number): Coordinates {
    return new Coordinates(row, column)
  }

  constructor(
    private readonly row: number,
    private readonly column: number,
  ) {}

  getNeighbors(): Array<Coordinates> {
    return this.getSurrounding().filter(Coordinates.notEquals(this))
  }

  private getSurrounding() {
    const coordinates: Array<Coordinates> = []
    for (let row = this.row - 1; row <= this.row + 1; row++) {
      for (let column = this.column - 1; column <= this.column + 1; column++) {
        coordinates.push(Coordinates.at(row, column))
      }
    }
    return coordinates
  }

  getFrom(board: Cell[][]) {
    if (this.row < 0 || this.column < 0) {
      return Cell.dead()
    }

    if (this.row >= board.length || this.column >= board.length) {
      return Cell.dead()
    }

    return board[this.row][this.column]
  }

  private equals(other: Coordinates) {
    return this.row === other.row && this.column === other.column
  }

  private static notEquals = (a: Coordinates) => (b: Coordinates) => !a.equals(b)
}
