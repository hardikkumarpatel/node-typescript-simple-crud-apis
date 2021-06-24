"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../../config/Logging"));
const NAMESPACE = 'ErrorHandler';
const ErrorHandler = (error, request, response, next) => {
    const status = error.statusCode || error.status || 500;
    new Logging_1.default().errorMessage(NAMESPACE, `${request.url} : ${request.method}`, error);
    response.status(status).send(error);
};
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map