import { NextFunction, Request, Response } from 'express';
import HttpException from './HttpException';
import Logging from '../../config/Logging';
const NAMESPACE = 'ErrorHandler';

const ErrorHandler = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
    const status = error.statusCode || error.status || 500;
    new Logging().errorMessage(NAMESPACE, `${request.url} : ${request.method}`, error);
    response.status(status).send(error);
};

export default ErrorHandler;
