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

  nextGeneration(neighbors: Neighbors) {
    if (this.alive && (neighbors.aliveAmount() === 2 || neighbors.aliveAmount() === 3)) {
      return Cell.alive()
    }

    return Cell.dead()
  }
}
