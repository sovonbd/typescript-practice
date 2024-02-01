export class Player {
    // name: string;
    // public age: number;
    // readonly country: string;
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    //   this.age = a;
    //   this.country = c;
    // }
    getAge() {
        return this.age;
    }
    play() {
        // console.log(`${this.name}, ${this.age}, ${this.country}`);
        console.log(`${this.name}, ${this.age}, ${this.country}`);
    }
}
