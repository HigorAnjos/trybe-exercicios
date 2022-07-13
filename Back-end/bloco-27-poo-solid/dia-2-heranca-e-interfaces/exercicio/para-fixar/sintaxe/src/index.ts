class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello() {
    console.log("Ola mundo!")
  }
};

class Subclass extends Superclass {}

function myFunc (sup: Superclass) {
  sup.sayHello();
}
const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1)
myFunc(obj2)