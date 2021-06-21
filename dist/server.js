"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __importDefault(require("./config/Config"));
var App_1 = __importDefault(require("./app/App"));
var Logging_1 = __importDefault(require("./config/Logging"));
var NAMESPACE = 'Server';
App_1.default.listen(Config_1.default.PORT, Config_1.default.HOSTNAME, Config_1.default.BACKLOG, function () {
    Logging_1.default.infoMessage(NAMESPACE, "Server is running on PORT:" + Config_1.default.PORT);
});
//# sourceMappingURL=Server.js.map