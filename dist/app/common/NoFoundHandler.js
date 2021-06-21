"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logging_1 = __importDefault(require("../../config/Logging"));
var NAMESPACE = 'NoFoundHandler';
var NoFoundHandler = function (request, response, next) {
    var message = 'Request resource not found.';
    Logging_1.default.errorMessage(NAMESPACE, request.url + " : " + request.method, message);
    response.status(404).send(message);
};
exports.default = NoFoundHandler;
//# sourceMappingURL=NoFoundHandler.js.map