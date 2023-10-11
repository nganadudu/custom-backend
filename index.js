import express, { json, urlencoded } from 'express';
import sequelize from 'sequelize';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import apiRoutes from './routes/api';

config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(json()); 

app.use(urlencoded({ extended: true })); 

app.use(cors());

app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is connected on ${PORT}`)
  console.log(`http://localhost:${PORT}`);
});
