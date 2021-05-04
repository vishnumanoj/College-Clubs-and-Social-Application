"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import "./Old Models And Routes/StressBusterFiles/node_modules/dotenv/config"
const stressBusterApp_1 = __importStar(require("./StressBusterFiles/stressBusterApp"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
//Chub
// const port1 = App1.instance.port;
// const server1 = http.createServer(app);
// server1.listen(port1, () => {
//     console.log(`server listening on port ${port1} !`);
// });
// const ios1=io(server1);
// ios1.on('connection', (socketServer) => {
//     server1.close(() => {
//         console.log('Process terminated')
//         console.log("Closing Application");
//         process.exit(0);
//     })
// });
//Stress buster
const port2 = stressBusterApp_1.StoryApp.instance.port;
const server2 = http_1.default.createServer(stressBusterApp_1.default);
server2.listen(port2, () => {
    console.log(`server listening on port ${port2} !`);
});
const ios2 = socket_io_1.default(server2);
ios2.on('connection', (socketServer) => {
    server2.close(() => {
        console.log('Process terminated');
        console.log("Closing Application");
        process.exit(0);
    });
});
//# sourceMappingURL=server.js.map