-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT Code, Name, Hours Description
FROM Scientists.Projects
ORDER BY Hours ASC LIMIT 5;
