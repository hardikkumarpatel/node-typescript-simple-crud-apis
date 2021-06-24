"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../../config/Logging"));
const shortid_1 = __importDefault(require("shortid"));
const NAMESPACE = 'UserDAOServices';
class UserDAOServices {
    constructor() {
        this.Users = [];
        this.AddUsers = (users) => __awaiter(this, void 0, void 0, function* () {
            try {
                users.id = shortid_1.default.generate();
                this.Users.push(users);
                return users;
            }
            catch (error) {
                return { succcess: false, error: error.message };
            }
        });
        this.GetUsesr = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return this.Users;
            }
            catch (error) {
                return { success: false, error: error.message };
            }
        });
        this.GetUserById = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const filteredUser = this.Users.find((ele) => ele.id === userId);
                return filteredUser;
            }
            catch (error) {
                return { success: false, error: error.message };
            }
        });
        this.PutUserById = (userId, users) => __awaiter(this, void 0, void 0, function* () {
            try {
                const Id = this.Users.findIndex((ele) => ele.id === userId);
                this.Users.splice(Id, 1, users);
                return `${users.id} updated via put`;
            }
            catch (error) {
                return { success: false, error: error.message };
            }
        });
        this.DeleteById = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const objIndex = this.Users.findIndex((ele) => ele.id === userId);
                this.Users.splice(objIndex, 1);
                return `${userId} removed`;
            }
            catch (error) {
                return { success: false, error: error.message };
            }
        });
        new Logging_1.default().infoMessage(NAMESPACE, 'Created new instance for User Dao services');
    }
}
exports.default = UserDAOServices;
//# sourceMappingURL=User.DAO.Services.js.map