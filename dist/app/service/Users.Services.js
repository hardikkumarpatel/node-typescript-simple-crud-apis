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
const User_DAO_Services_1 = __importDefault(require("../DAOServices/User.DAO.Services"));
class UserServices {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return new User_DAO_Services_1.default().AddUsers(resource);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return new User_DAO_Services_1.default().GetUsesr();
        });
    }
    readById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new User_DAO_Services_1.default().GetUserById(userId);
        });
    }
    deleteById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new User_DAO_Services_1.default().DeleteById(userId);
        });
    }
    putById(userId, users) {
        return __awaiter(this, void 0, void 0, function* () {
            return new User_DAO_Services_1.default().PutUserById(userId, users);
        });
    }
}
exports.default = UserServices;
//# sourceMappingURL=Users.Services.js.map