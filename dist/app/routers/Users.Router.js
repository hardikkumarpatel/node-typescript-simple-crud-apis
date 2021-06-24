"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Users_Controller_1 = __importDefault(require("../controller/Users.Controller"));
router.post("/create", new Users_Controller_1.default().createUsers);
router.get("/userlist", new Users_Controller_1.default().getUsers);
exports.default = router;
//# sourceMappingURL=Users.Router.js.map