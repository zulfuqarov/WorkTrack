import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';

import { connectMongoDb } from './connection/DbConnection.js';
import { ClodinaryConnection } from './connection/ClodinaryConnection.js';
import allRouter from './AllRoutes.js';

import swaggerUi from 'swagger-ui-express';
const swaggerFile = JSON.parse(readFileSync('./swagger-output.json', 'utf-8'));

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};


// Middleware'ler
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// API endpointleri
app.use('/api', allRouter);

app.listen(port, async () => {
    await connectMongoDb();
    await ClodinaryConnection();
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
