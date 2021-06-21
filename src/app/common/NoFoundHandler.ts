import Logging from '../../config/Logging';
import { NextFunction, Request, Response } from 'express';
const logging = new Logging();
const NAMESPACE = 'NoFoundHandler';

export default class NoFoundHandler {
    constructor() {}
    NoFoundHandler = (request: Request, response: Response, next: NextFunction) => {
        const message = 'Request resource not found.';
        logging.errorMessage(NAMESPACE, `${request.url} : ${request.method}`, message);
        response.status(404).send(message);
    };
}
