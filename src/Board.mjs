export class Board {
  width;
  height;
  falling;
  fallingBlock;
  tickNumber;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false
    this.tickNumber = 0
  }

  drop(block) {
    if (this.falling === true) {
      throw new Error('already falling')
    } else {
      this.falling = true
      this.fallingBlock = block.color
    }
  }

  tick() {
    this.tickNumber += 1
    if (this.tickNumber === this.height) {
      this.falling = false
    }
  }

  hasFalling() {
    return this.falling ? true : false
  }


  toString() {
    
    let board = ''
    let middle = this.width % 2

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.falling && i == this.tickNumber && j == middle) {
          board += this.fallingBlock
        } else if (this.fallingBlock && !this.falling && i == this.height-1 && j == middle) {
          board += this.fallingBlock
        } else {
          board += '.'
        }
      }
      board += "\n"
    }
    console.log(board)
    return board;
  }
}
