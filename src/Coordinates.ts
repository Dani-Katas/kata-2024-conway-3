import { Cell } from "./Cell.js"

export class Coordinates {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  getNeighbors(): Array<Coordinates> {
    const coordinates: Array<Coordinates> = []

    for (let i = this.x - 1; i <= this.x + 1; i++) {
      for (let j = this.y - 1; j <= this.y + 1; j++) {
        if (i === this.x && j === this.y) {
          continue
        }

        coordinates.push(new Coordinates(i, j))
      }
    }

    return coordinates
  }

  getFrom(board: Cell[][]) {
    if (this.x < 0 || this.y < 0) {
      return Cell.dead()
    }

    if (this.x >= board.length || this.y >= board.length) {
      return Cell.dead()
    }

    return board[this.x][this.y]
  }
}
