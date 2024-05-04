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

    for (let i = this.x - 1; i <= this.x + 1; i++) {
      for (let j = this.y - 1; j <= this.y + 1; j++) {
        if (i === this.x && j === this.y) {
          continue
        }

        coordinates.push(new Coordinates(i, j))
      }
    }

    return coordinates
  }
}
