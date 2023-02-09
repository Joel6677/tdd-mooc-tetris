export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = []
  }


  toString() {
    
    let board = ""

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        board += "."
      }
      board += "\n"
    }

    console.log(board)

    return board;
  }
}
