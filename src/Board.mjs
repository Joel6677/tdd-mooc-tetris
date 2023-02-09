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
    console.log('tick')
    this.tickNumber += 1
  }


  toString() {
    
    let board = ''
    let middle = this.width % 2

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.falling && i == this.tickNumber && j == middle) {
          board += this.fallingBlock
        } else {
          board += '.'
        }
      }
      board += "\n"
    }

    return board;
  }
}
