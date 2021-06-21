"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objection_1 = require("objection");
var knex_1 = __importDefault(require("knex"));
var pg_1 = require("pg");
var Logging_1 = __importDefault(require("../../config/Logging"));
var Config_1 = __importDefault(require("../../config/Config"));
var NAMESPACE = 'DBModel';
Logging_1.default.infoMessage(NAMESPACE, 'Query log', pg_1.Client);
var knex = knex_1.default({
    client: 'pg',
    useNullAsDefault: true,
    searchPath: ['public'],
    connection: {
        host: Config_1.default.DBHOST,
        user: Config_1.default.DBUSER,
        password: Config_1.default.DBPASS,
        database: Config_1.default.DBNAME
    },
    debug: Config_1.default.DBDEBUG === 'true'
});
objection_1.Model.knex(knex);
exports.default = objection_1.Model;
//# sourceMappingURL=DBModel.js.map