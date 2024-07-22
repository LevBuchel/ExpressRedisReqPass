import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/request', (req: Request, res: Response) => {
  res.send('inner context');
});

app.listen(port, () => {
  console.log(`Secondary service listening at port: ${port}`);
});
