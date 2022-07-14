class Circle {
  public static _color: string = "Nao precisa instanciar";

  public set color (c: string) {
    Circle._color = c;
  }

  public print() {
    console.log("Color", Circle._color);
  }

  public static print() {
    console.log("Color2", Circle._color);
  }
}

console.log(Circle._color);
Circle.print();

// para usar os metodos nao statico da class (print) preicsa instanciar
const obj = new Circle;

obj.print();
