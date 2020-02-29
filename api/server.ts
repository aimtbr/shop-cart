import express, { Request, Response } from 'express';
import { resolve } from 'path';


const PUBLIC_DIR = resolve(__dirname, 'public');
const { PORT = 3000 } = process.env;

const server = express();

server.use(express.static(PUBLIC_DIR));

server.get('*', (req: Request, res: Response) => {
  res.sendFile(resolve(PUBLIC_DIR, 'index.html'));
});

server.listen(PORT, () => console.log(`App is running on port ${PORT}`));
