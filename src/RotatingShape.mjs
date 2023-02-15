export class RotatingShape {
    shape
    grid

    constructor(shape) {
        this.shape = shape.replace(/[\r\t\f\v ]/g, '')
        // this.grid = [...Array(height)].map(e => Array(width).fill());
    }

    rotateRight() {
        for (let i = 0; i < 2; i++) {

        }
    }

    toString() {

        return this.shape+'\n'
    }
    
}