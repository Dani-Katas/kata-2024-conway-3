import { Cell } from "./Cell.js"

export class Neighbors {
  constructor(cells: Cell[]) {
    if (cells.length !== 8) {
      throw Error("There bust be 8 neighbors")
    }
  }
}
