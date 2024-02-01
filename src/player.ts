import { IsPlayer } from "./interface/IsPlayer.js";

export class Player implements IsPlayer {
  // name: string;
  // public age: number;
  // readonly country: string;

  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  // constructor(n: string, a: number, c: string) {
  //   this.name = n;
  //   this.age = a;
  //   this.country = c;
  // }

  getAge(){
    return this.age;
  }

  play() {
    // console.log(`${this.name}, ${this.age}, ${this.country}`);
    console.log(`${this.name}, ${this.age}, ${this.country}`);
  }
}
