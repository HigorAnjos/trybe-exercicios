interface IMyinterface { // contrato
  // atributos
  myNumber: number;

  // metodos
  myFunc(myParam: number): string;
}

class MyClass implements IMyinterface {
  constructor(public myNumber: number){}

  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return sum.toString();
  }

}