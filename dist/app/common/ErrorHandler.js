"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logging_1 = __importDefault(require("../../config/Logging"));
var NAMESPACE = 'ErrorHandler';
var ErrorHandler = function (error, request, response, next) {
    var status = error.statusCode || error.status || 500;
    Logging_1.default.errorMessage(NAMESPACE, request.url + " : " + request.method, error);
    response.status(status).send(error);
};
exports.default = ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map