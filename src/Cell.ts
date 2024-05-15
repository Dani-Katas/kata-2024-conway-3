import { Neighbors } from "./Neighbors.js"

export abstract class Cell {
  static alive() {
    return new AliveCell()
  }

  static dead() {
    return new DeadCell()
  }

  static create(isAlive: boolean): Cell {
    return isAlive ? this.alive() : this.dead()
  }

  abstract isAlive(): boolean

  abstract isDead(): boolean

  abstract nextGeneration(neighbors: Neighbors): Cell
}

class AliveCell extends Cell {
  override nextGeneration(neighbors: Neighbors): Cell {
    if (neighbors.hasUnderpopulation()) return Cell.dead()

    if (neighbors.isOvercrowded()) return Cell.dead()

    return this
  }

  override isAlive(): boolean {
    return true
  }

  override isDead(): boolean {
    return false
  }
}

class DeadCell extends Cell {
  override nextGeneration(neighbors: Neighbors): Cell {
    if (neighbors.hasThreeAlive()) return Cell.alive()

    return this
  }

  override isAlive(): boolean {
    return false
  }

  override isDead(): boolean {
    return true
  }
}
