export class RotatingShape {
    shape
    grid
    grid2 

    constructor(shape) {
        this.shape = shape.replace(/[\r\t\f\v ]/g, '')
        this.shape2 = shape.replace(/\s/g, '')
        this.side = Math.sqrt(this.shape.replace(/\s/g, '').length)
        this.grid = [...Array(this.side)].map(e => Array(this.side).fill('.'));
        this.grid2 = [...Array(this.side)].map(e => Array(this.side).fill('.'));
        this.fillArray(this.grid)
        this.fillArray(this.grid2)
        
    }

    fillArray(grid) {
        let k = 0;
        for (let i = 0; i < this.side; i++) {
            for (let j = 0; j < this.side; j++) {
                grid[i][j] = this.shape2[k]
                k++;
            }
        }
    }

    rotateRight() {

        let newCol = this.side-1
        let newRow = 0
        for (let i = 0; i < this.side; i++) {
            for (let j = 0; j < this.side; j++) {
                this.grid[newRow][newCol] = this.grid2[i][j]
                newRow++
            }
            newCol--
            newRow = 0
        }
        let string = ''
        for (let i = 0; i < this.side; i++) {
            for (let j = 0; j < this.side; j++) {
                string += this.grid[i][j]
            }
            string += '\n'
        }
        return string
    }

    rotateLeft() {

        let newCol = 0
        let newRow = this.side-1
        for (let i = 0; i < this.side; i++) {
            for (let j = 0; j < this.side; j++) {
                this.grid[newRow][newCol] = this.grid2[i][j]
                newRow--
            }
            newCol++
            newRow = this.side-1
        }
        let string = ''
        for (let i = 0; i < this.side; i++) {
            for (let j = 0; j < this.side; j++) {
                string += this.grid[i][j]
            }
            string += '\n'
        }
        return string
    }

    toString() {
        return this.shape+'\n'
    }
    
}