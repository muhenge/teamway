import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/database';
import listEndpoints from "express-list-endpoints";
import employeeRoute from './routes/employee.routes';
import shiftRoutes from './routes/shifts.routes';

const app = express();

app.use(helmet());
app.disable('x-powered-by');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 4003

app.use('/api', employeeRoute)
app.use('/api', shiftRoutes)
const connectServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

connectServer();
if(process.env.DEV = 'development') console.info("routes endpoints list: ", listEndpoints(app));

export default app;
