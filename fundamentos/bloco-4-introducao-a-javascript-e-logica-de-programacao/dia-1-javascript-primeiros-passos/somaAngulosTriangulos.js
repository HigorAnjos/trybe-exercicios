/* Soma dos angulos internos de um triangulo e 180º */

const AnguloA = 60;
const AnguloB = 60;
const AnguloC = 60;
const resp = (((AnguloA+AnguloB+AnguloC) == 180) && AnguloA>0 && AnguloB>0 && AnguloC>0)  ? true : false;
console.log(resp);
