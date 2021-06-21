"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var AuthControllerRouter_1 = __importDefault(require("./routers/AuthControllerRouter"));
var ErrorHandler_1 = __importDefault(require("./common/ErrorHandler"));
var NoFoundHandler_1 = __importDefault(require("./common/NoFoundHandler"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(helmet_1.default());
//Routers
app.use('/customers', AuthControllerRouter_1.default);
//Common Middleware
app.use(ErrorHandler_1.default);
app.use(NoFoundHandler_1.default);
exports.default = app;
//# sourceMappingURL=App.js.map