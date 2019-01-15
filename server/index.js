import express from 'express';
import cors from 'cors';
import config from './config';

const app = express();

app.use(cors());

app.get('/ico-user-list', (req, res) => {
  res.send({ test: 'success' });
});

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}`));
