import { NextFunction, Request, Response } from 'express';
import Logging from '../../config/Logging';
const logging = new Logging();
const NAMESPACE = 'AuthController';

const signUp = (req: Request, res: Response, next: NextFunction) => {
    logging.infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
    res.status(200).send({
        Success: true
    });
};

export default { signUp };
