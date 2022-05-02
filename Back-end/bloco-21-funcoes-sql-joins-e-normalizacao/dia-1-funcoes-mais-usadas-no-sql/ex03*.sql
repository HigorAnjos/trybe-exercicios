SELECT JOB_ID, (MAX_SALARY - MIN_SALARY)/2 AS 'Media salarial de cada JOB_ID'
FROM hr.jobs
ORDER BY 'Media salarial de cada JOB_ID' DESC;