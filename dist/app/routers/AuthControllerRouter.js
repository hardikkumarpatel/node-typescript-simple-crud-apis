"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var AuthController_1 = __importDefault(require("../controller/AuthController"));
router.post("/signup", AuthController_1.default.signUp);
exports.default = router;
//# sourceMappingURL=AuthControllerRouter.js.map