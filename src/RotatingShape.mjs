export class RotatingShape {
    shape

    constructor(shape) {
        this.shape = shape
    }

    toString() {

        let modified = ''

        for (let i = 0; i < this.shape.length; i++) {
            console.log(this.shape[i])
            if (this.shape[i] !== ' ') {
                modified += this.shape[i]
            }
        }
        
        return modified+'\n'
    }
    
}