
const peca = "Torres";

switch (peca.toLowerCase())
{
    case "rei":
        console.log("Movimentos do Rei: Todas direcoes 1 casa ");
    break;
    case "dama":
        console.log("Movimentos da Dama: Todas direcoes N-casas ");
    break;
    case "cavalo":
        console.log("Movimentos do Cavalo: No eixo X e Y 2 casas e 1 a direita ou esqueda formando um L ");
    break;
    case "bispos":
        console.log("Movimentos do Bispos: Somente nas diagonais n casas");
    break;
    case "torres":
        console.log("Movimentos das Torres: Somente nos eixo X, Y N-casas ");
    break;
    case "peoes":
        console.log("Movimentos dos Peoes: Em linha reta eixo Y");
    break;
    default:
        console.log("Peca nao encontrada");
    break;
}
