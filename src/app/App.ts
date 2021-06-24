import { WelcomeMessage } from './common/WelcomeMessage';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import ErrorHandler from './common/ErrorHandler';
import NoFoundHandler from './common/NoFoundHandler';
import UsersRouter from './routers/Users.Router';
const noFoundHandler = new NoFoundHandler();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

//Routers
app.use('/users', UsersRouter);
app.use('/', new WelcomeMessage().welcomeMessage);

//Common Middleware
app.use(ErrorHandler);
app.use(noFoundHandler.NoFoundHandler);

export default app;
