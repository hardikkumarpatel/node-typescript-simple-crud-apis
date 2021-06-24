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
const Logging_1 = __importDefault(require("../../config/Logging"));
const logging = new Logging_1.default();
const NAMESPACE = 'WelcomeMessage';
class WelcomeMessage {
    constructor() {
        this.welcomeMessage = (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                logging.infoMessage(NAMESPACE, `${request.url} : ${request.method}`);
                response.status(200).send({
                    success: true,
                    message: 'Welcome to Node and Typescript structure!',
                    about: 'Made in Node with ❤️ TypeScript.'
                });
            }
            catch (error) {
                logging.errorMessage(NAMESPACE, `${request.url} : ${request.method}`, error.message);
                response.status(500).send({
                    success: false,
                    error: error.message
                });
            }
        });
    }
}
exports.default = WelcomeMessage;
//# sourceMappingURL=WelcomeMessage.js.map