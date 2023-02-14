export class Board {
  width;
  height;
  falling;
  fallingBlock;
  tickNumber;
  grid;
  middle;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.middle = Math.floor(this.width / 2);
    this.falling = false
    this.tickNumber = 0
    this.grid = [...Array(height)].map(e => Array(width).fill('.'));
  }


  drop(block) {
    if (this.falling === true) {
      throw new Error('already falling')
    } else {
      this.falling = true
      this.fallingBlock = block.color
      this.grid[0][this.middle] = block.color
    }
  }

  tick() {

    let blockUnder = this.tickNumber+1 < this.height && this.grid[this.tickNumber+1][this.middle] != '.'
       ? this.grid[this.tickNumber+1][this.middle] : null
    
    this.tickNumber += 1

    if (this.tickNumber === this.height || blockUnder) {
      this.falling = false
      this.tickNumber = 0
    }

    if (this.falling === true) {
      this.grid[this.tickNumber][this.middle] = this.grid[this.tickNumber-1][this.middle]
      this.grid[this.tickNumber-1][this.middle] = '.'
    }
  }

  hasFalling() {
    return this.falling ? true : false
  }


  toString() {
    
    let board = ''

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        board += this.grid[i][j]
      }
      board += "\n"
    }

    return board;
  }
}
