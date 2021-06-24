import UserServices from '../service/Users.Services';
import { Request, Response } from 'express';
import Logging from '../../config/Logging';
const NAMESPACE = 'AuthController';

class UsersController {
    createUsers = async (req: Request, res: Response) => {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
        const users = await new UserServices().create(req.body);
        res.status(200).send(users);
    };

    getUsers = async (req: Request, res: Response) => {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
        const users = await new UserServices().list();
        res.status(200).send(users);
    };

    getUsersById = async (req: Request, res: Response) => {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
        const users = await new UserServices().readById(req.body.id);
        res.status(200).send(users);
    };

    updateById = async (req: Request, res: Response) => {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
        const users = await new UserServices().putById(req.body.id, req.body);
        res.status(200).send(users);
    };

    deleteById = async (req: Request, res: Response) => {
        new Logging().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
        const users = await new UserServices().deleteById(req.body.id);
        res.status(200).send(users);
    };
}

export default UsersController;
