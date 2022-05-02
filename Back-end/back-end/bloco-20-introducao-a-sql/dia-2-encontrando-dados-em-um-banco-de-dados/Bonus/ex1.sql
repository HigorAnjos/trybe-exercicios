-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
USE PiecesProviders;
SELECT Piece, Price FROM PiecesProviders.Provides
WHERE Provider = 'RBT';