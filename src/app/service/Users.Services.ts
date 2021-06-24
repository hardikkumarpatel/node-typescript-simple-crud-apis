import { UserDTO } from './../model/User.Model';
import { UsersInterfaceService } from './../Interface/Users.Interface';
import UserDAOServices from '../DAOServices/User.DAO.Services';

class UserServices implements UsersInterfaceService {
    async create(resource: UserDTO) {
        return new UserDAOServices().AddUsers(resource);
    }
    async list() {
        return new UserDAOServices().GetUsesr();
    }
    async readById(userId: string) {
        return new UserDAOServices().GetUserById(userId);
    }
    async deleteById(userId: string) {
        return new UserDAOServices().DeleteById(userId);
    }
    async putById(userId: string, users: UserDTO) {
        return new UserDAOServices().PutUserById(userId, users);
    }
}

export default UserServices;
