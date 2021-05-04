"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const socketClient = socket_io_client_1.default.connect('http://localhost:3000', { port: "3000" });
console.log("Communicating to Close Nodejs process");
function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
async function main() {
    socketClient.on('connection', () => {
        console.log("Communicating to close Nodejs process");
    });
    await sleep(100);
    socketClient.off('connection');
    socketClient.disconnect();
}
main();
//# sourceMappingURL=server.stop.js.map