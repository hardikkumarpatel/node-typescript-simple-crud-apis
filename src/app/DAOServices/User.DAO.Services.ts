import { UserDTO } from './../model/User.Model';
import Logging from '../../config/Logging';
import shortid from 'shortid';
const NAMESPACE = 'UserDAOServices';

class UserDAOServices {
    Users: UserDTO[] = [];
    constructor() {
        new Logging().infoMessage(NAMESPACE, 'Created new instance for User Dao services');
    }

    AddUsers = async (users: UserDTO) => {
        users.id = shortid.generate();
        this.Users.push(users);
        return users;
    };

    GetUsesr = async () => {
        return this.Users;
    };

    GetUserById = async (userId: string) => {
        try {
            const filteredUser = this.Users.find((ele) => ele.id === userId);
            return {
                success: true,
                results: filteredUser
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    };

    PutUserById = async (userId: string, users: UserDTO) => {
        try {
            const Id = this.Users.findIndex((ele: { id: string }) => ele.id === userId);
            this.Users.splice(Id, 1, users);
            return {
                success: true,
                results: this.Users[Id]
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    };

    DeleteById = async (userId: string) => {
        try {
            const objIndex = this.Users.findIndex((ele: { id: string }) => ele.id === userId);
            this.Users.splice(objIndex, 1);
            return {
                success: true,
                message: 'User deleted success!'
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    };
}

export default UserDAOServices;
