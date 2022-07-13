import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/users', async (req: Request, res: Response): Promise<Response> => {
  const allUsers = 
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});