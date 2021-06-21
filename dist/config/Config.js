"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_HOSTNAME = process.env.HOST || 'localhost';
var SERVER_PORT = process.env.PORT ? parseInt(process.env.PORT) : 5080;
var SERVER_BACKLOG = 5090;
var DB_HOST = process.env.DB_HOST;
var DB_NAME = process.env.DB_NAME;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_DEBUG = process.env.DB_DEBUG;
var SERVER = {
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