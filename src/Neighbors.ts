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

  constructor(cells: Cell[]) {
    if (cells.length !== 8) {
      throw Error("There bust be 8 neighbors")
    }
  }

  deadAmount() {
    return 8
  }
}
