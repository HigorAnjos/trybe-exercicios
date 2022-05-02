-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;