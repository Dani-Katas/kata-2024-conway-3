import { Cell } from "./Cell.js"

class Coordinates {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }
}

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

  getNeighborsCoordinates(coordinate: Coordinates): Array<Coordinates> {
    const coordinates: Array<Coordinates> = []

    for (let i = coordinate.getX() - 1; i <= coordinate.getX() + 1; i++) {
      for (let j = coordinate.getY() - 1; j <= coordinate.getY() + 1; j++) {
        if (i === coordinate.getX() && j === coordinate.getY()) {
          continue
        }

        coordinates.push(new Coordinates(i, j))
      }
    }

    return coordinates
  }

  getNeighbors(row: number, column: number) {
    const coordinates = new Coordinates(row, column)
    return this.getNeighborsCoordinates(coordinates).map((coordinates) => this.getCellAt(coordinates))
  }

  private getCellAt(coordinates: Coordinates) {
    if (coordinates.getX() < 0 || coordinates.getY() < 0) {
      return Cell.dead()
    }

    if (coordinates.getX() >= this.board.length || coordinates.getY() >= this.board.length) {
      return Cell.dead()
    }

    return this.board[coordinates.getX()][coordinates.getY()]
  }
}
