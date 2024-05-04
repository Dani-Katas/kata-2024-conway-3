export class Cell {

  static create(isAlive: boolean): Cell {
    return new Cell()
  }

  isAlive() {
    return true;
  }
}
