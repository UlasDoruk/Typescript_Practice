export function x(item) {
    return item;
}
export function power(first, second) {
    return Math.pow(first, second);
}
export class HUMAN {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        return `Hi there I am ${this.name} and I am ${this.age}`;
    }
}
