export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false
  }

  drop(block) {
    this.falling = true
  }

  tick() {

  }


  toString() {
    
    let board = ''
    let middle = this.width % 2

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (this.falling && i == 0 && j == middle) {
          board += 'X'
        } else {
          board += '.'
        }
      }
      board += "\n"
    }

    return board;
  }
}
