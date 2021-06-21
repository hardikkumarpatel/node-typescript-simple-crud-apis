import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import AuthControllerRouter from './routers/AuthControllerRouter';
import ErrorHandler from './common/ErrorHandler';
import NoFoundHandler from './common/NoFoundHandler';
import WelcomeMessage  from './common/WelcomeMessage';
const noFoundHandler = new NoFoundHandler();
const welcomeMessage = new WelcomeMessage();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

//Routers
app.use('/customers', AuthControllerRouter);
//app.use('', welcomeMessage.welcomeMessage);

//Common Middleware
app.use(ErrorHandler);
app.use(noFoundHandler.NoFoundHandler);

export default app;
