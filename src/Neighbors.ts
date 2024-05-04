import { Cell } from "./Cell.js"

export class Neighbors {
  static allDead() {
    return new Neighbors([
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
      Cell.dead(),
    ])
  }

  static allAlive() {
    return new Neighbors([
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
      Cell.alive(),
    ])
  }

  constructor(private readonly cells: Cell[]) {
    if (cells.length !== 8) {
      throw Error("There bust be 8 neighbors")
    }
  }

  deadAmount() {
    return this.cells.filter((cell) => !cell.isAlive()).length
  }
}
