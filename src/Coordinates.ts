export class Coordinates {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {}

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  getNeighbors(): Array<Coordinates> {
    const coordinates: Array<Coordinates> = []

    for (let i = this.getX() - 1; i <= this.getX() + 1; i++) {
      for (let j = this.getY() - 1; j <= this.getY() + 1; j++) {
        if (i === this.getX() && j === this.getY()) {
          continue
        }

        coordinates.push(new Coordinates(i, j))
      }
    }

    return coordinates
  }
}
