import { Neighbors } from "./Neighbors.js"

export class Cell {
  constructor(private readonly alive: boolean) {}

  static alive() {
    return new Cell(true)
  }

  static dead() {
    return new Cell(false)
  }

  static create(isAlive: boolean): Cell {
    return new Cell(isAlive)
  }

  isAlive() {
    return this.alive
  }

  isDead() {
    return !this.alive
  }

  nextGeneration(neighbors: Neighbors): Cell {
    if (this.isAlive()) {
      if (neighbors.hasUnderpopulation() || neighbors.isOvercrowded()) {
        return Cell.dead()
      } else {
        return Cell.alive()
      }
    }

    if (this.isDead()) {
      if (neighbors.hasThreeAlive()) {
        return Cell.alive()
      } else {
        return Cell.dead()
      }
    }

    return Cell.dead()
  }
}
