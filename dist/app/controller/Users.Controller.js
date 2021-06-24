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
const Users_Services_1 = __importDefault(require("../service/Users.Services"));
const Logging_1 = __importDefault(require("../../config/Logging"));
const NAMESPACE = 'AuthController';
class UsersController {
    constructor() {
        this.createUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            new Logging_1.default().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
            const users = yield new Users_Services_1.default().create(req.body);
            res.send(users);
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            new Logging_1.default().infoMessage(NAMESPACE, `${req.url} : ${req.method}`);
            const users = yield new Users_Services_1.default().list();
            res.send(users);
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=Users.Controller.js.map