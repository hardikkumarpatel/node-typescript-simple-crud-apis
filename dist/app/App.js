"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const Users_Router_1 = __importDefault(require("./routers/Users.Router"));
const ErrorHandler_1 = __importDefault(require("./common/ErrorHandler"));
const NoFoundHandler_1 = __importDefault(require("./common/NoFoundHandler"));
const WelcomeMessage_1 = __importDefault(require("./common/WelcomeMessage"));
const noFoundHandler = new NoFoundHandler_1.default();
const welcomeMessage = new WelcomeMessage_1.default();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(helmet_1.default());
//Routers
app.use('/users', Users_Router_1.default);
app.use('', welcomeMessage.welcomeMessage);
//Common Middleware
app.use(ErrorHandler_1.default);
app.use(noFoundHandler.NoFoundHandler);
exports.default = app;
//# sourceMappingURL=App.js.map