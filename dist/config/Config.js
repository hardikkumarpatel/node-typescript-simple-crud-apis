"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_HOSTNAME = process.env.HOST || 'localhost';
const SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT) : 5080;
const SERVER_BACKLOG = 5090;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_DEBUG = process.env.DB_DEBUG;
const SERVER = {
    HOSTNAME: SERVER_HOSTNAME,
    PORT: SERVER_PORT,
    BACKLOG: SERVER_BACKLOG,
    DBHOST: DB_HOST,
    DBNAME: DB_NAME,
    DBUSER: DB_USER,
    DBPASS: DB_PASS,
    DBDEBUG: DB_DEBUG
};
exports.default = SERVER;
//# sourceMappingURL=Config.js.map