export class Cell {
  constructor(private readonly _isAlive: boolean) {

  }


  static create(isAlive: boolean): Cell {
    return new Cell(isAlive)
  }

  isAlive() {
    return this._isAlive
  }
}
