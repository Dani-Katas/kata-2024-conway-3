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

  static withAliveAmount(number: number): Neighbors {
    const cells = new Array(8).fill(0).map((_, i) => (i < number ? Cell.alive() : Cell.dead()))
    return new Neighbors(cells)
  }

  constructor(private readonly cells: Cell[]) {
    if (cells.length !== 8) {
      throw Error("There bust be 8 neighbors")
    }
  }

  deadAmount() {
    return this.cells.filter((cell) => cell.isDead()).length
  }

  private aliveAmount() {
    return 8 - this.deadAmount()
  }

  hasUnderpopulation() {
    return this.aliveAmount() < 2
  }

  isOvercrowded() {
    return this.aliveAmount() > 3
  }

  hasThreeAlive() {
    return this.aliveAmount() === 3
  }
}
