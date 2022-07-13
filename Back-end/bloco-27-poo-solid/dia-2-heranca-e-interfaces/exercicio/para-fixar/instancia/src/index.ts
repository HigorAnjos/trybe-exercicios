class Superclass {
  public isSuper: boolean;

  constructor(init?: boolean) {
    this.isSuper = init || true;
  }

  protected sayHello() {
    console.log("Ola mundo!")
  }
};

class Subclass extends Superclass {
  constructor () {
    super(true);
  }

  public sayHello2 () {
    this.sayHello();
  }
}

// function myFunc (sup: Superclass) {
//   sup.sayHello();
// }

function myFunc (sup: Subclass) {
  sup.sayHello2();
}

const obj = new Subclass();

myFunc(obj)
