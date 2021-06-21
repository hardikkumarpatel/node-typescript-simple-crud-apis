import Logging from '../../config/Logging';
import { NextFunction, Request, Response } from 'express';
const logging = new Logging();
const NAMESPACE = 'WelcomeMessage';

export default class WelcomeMessage {
    constructor() {}
    welcomeMessage = async (request: Request, response: Response, next: NextFunction) => {
        try {
            logging.infoMessage(NAMESPACE, `${request.url} : ${request.method}`);
            response.status(200).send({
                success: true,
                message: 'Welcome to Node and Typescript structure!',
                about: 'Made in Node with ❤️ TypeScript.'
            });
        } catch (error) {
            logging.errorMessage(NAMESPACE, `${request.url} : ${request.method}`, error.message);
            response.status(500).send({
                success: false,
                error: error.message
            });
        }
    };
}
