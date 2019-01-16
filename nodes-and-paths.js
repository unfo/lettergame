class Node {
    constructor(letter, value = 0, neighbors = []) {
        this.letter = letter;
        this.value = value;
        this.neighbors = neighbors;
    }
    
    
    addNeighbor(node) {
        this.neighbors.push(node);
    }
    
    toString() {
        return `Node<${this.letter}, ${this.value}>`;
    }
}

class Path {
    constructor(start) {
        this.current = start;
        this.nodes = [start];
    }

    clone() {
        let copy = new Path(this.start);
        copy.current = this.current;
        copy.nodes = this.nodes.slice();
        return copy;
    }
    
    add(node) {
        if (this.nodes.includes(node)) {
            return false;
        } else {
            this.nodes.push(node);
            this.current = node;
            return true;
        }
    }
    
    goBack() {
        let _ = this.nodes.pop();
        this.current = this.nodes.pop();
        this.nodes.push(this.current);
    }
    
    toString() {
        let joined_path = this.nodes.reverse().map(node => { return node.letter; }).join(' -> ');
        let str = `Path<${joined_path}>`;
        return str;
    }
    toWord() {
        // console.log('Path.toWord()', this);
        let str = this.nodes.map(node => { return node.letter; }).join('');
        // console.log('=> ', str);
        return str;
    }

    get length() {
        return this.nodes.length;
    }
}