export class Cell {
  constructor(private readonly _isAlive: boolean) {}

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
    return this._isAlive
  }

  isDead() {
    return !this._isAlive
  }
}
