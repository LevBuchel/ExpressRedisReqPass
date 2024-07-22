import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;
const secondaryHost = process.env.SECONDARY_HOST || 'http://localhost:3001';

app.get('/api/request', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${secondaryHost}/api/request`);
    res.send(`The inner context is: ${response.data}`);
  } catch (error) {
    res.status(500).send('Error fetching data from secondary service');
  }
});

app.listen(port, () => {
  console.log(`Primary service listening at port: ${port}`);
});
