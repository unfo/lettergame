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
        return "Node<${this.letter}}, ${this.value}>";
    }
}

class Path {
    constructor(start) {
        this.current = start;
        this.nodes = [start];
    }

    add(node) {
        if (node in this.nodes) {
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
        let joined_path = this.nodes.reverse().map(node => { node.letter; }).join(' -> ');
        let str = "Path<${joined_path}>";
        return str;
    }
}