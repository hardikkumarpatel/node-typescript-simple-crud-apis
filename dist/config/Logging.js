"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging = function () {
    return new Date().toISOString();
};
var infoMessage = function (namespace, message, object) {
    if (object)
        console.log("[" + logging() + "] [INFO] [" + namespace + "] [" + message + "]", object);
    else
        console.log("[" + logging() + "] [INFO] [" + namespace + "] [" + message + "]");
};
var errorMessage = function (namespace, message, object) {
    if (object)
        console.error("[" + logging() + "] [ERROR] [" + namespace + "] [" + message + "]", object);
    else
        console.error("[" + logging() + "] [ERROR] [" + namespace + "] [" + message + "]");
};
var warnMessage = function (namespace, message, object) {
    if (object)
        console.warn("[" + logging() + "] [WARN] [" + namespace + "] [" + message + "]", object);
    else
        console.warn("[" + logging() + "] [WARN] [" + namespace + "] [" + message + "]");
};
var debugMessage = function (namespace, message, object) {
    if (object)
        console.debug("[" + logging() + "] [DEBUG] [" + namespace + "] [" + message + "]", object);
    else
        console.debug("[" + logging() + "] [DEBUG] [" + namespace + "] [" + message + "]");
};
exports.default = {
    infoMessage: infoMessage,
    errorMessage: errorMessage,
    warnMessage: warnMessage,
    debugMessage: debugMessage
};
//# sourceMappingURL=Logging.js.map