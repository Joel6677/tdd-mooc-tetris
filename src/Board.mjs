export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.init_board(width,height)
  }

  init_board(width,height) {
    let board = [[]]
    let array = []
    for(let i = 0; i < width; i++) {
      array[i] = '.'
    }
    for(let i = 0; i < height; i++) {
      board.push(array)
    }
    return board
  }


  toString() {
    
    let board = ""

    for (let i = 1; i <= this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        board += this.board[i][j]
      }
      board += "\n"
    }

    return board;
  }
}
