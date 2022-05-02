SELECT 
  MAX(SALARY) as 'Maior salario', 
  MIN(SALARY) as 'Menor salario', 
  SUM(SALARY) as 'Soma de todos os salarios', 
  AVG(SALARY) as 'Meida dos salarios'
FROM hr.employees;