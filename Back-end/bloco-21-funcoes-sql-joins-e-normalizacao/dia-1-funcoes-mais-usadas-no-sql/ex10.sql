SELECT
  AVG(SALARY) as 'Media dos salarios do DP',
  COUNT(EMPLOYEE_ID) as 'Quantidade de funcionarios do DP'
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(EMPLOYEE_ID) > 10;