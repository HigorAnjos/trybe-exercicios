-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;