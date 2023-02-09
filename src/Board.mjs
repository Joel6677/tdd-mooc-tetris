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


  toString() {
    
    let board = ''

    for (let i = 1; i <= this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        board += '.'
      }
      board += "\n"
    }

    return board;
  }
}
