"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logging_1 = __importDefault(require("../../config/Logging"));
const logging = new Logging_1.default();
const NAMESPACE = 'NoFoundHandler';
class NoFoundHandler {
    constructor() {
        this.NoFoundHandler = (request, response, next) => {
            const message = 'Request resource not found.';
            logging.errorMessage(NAMESPACE, `${request.url} : ${request.method}`, message);
            response.status(404).send(message);
        };
    }
}
exports.default = NoFoundHandler;
//# sourceMappingURL=NoFoundHandler.js.map