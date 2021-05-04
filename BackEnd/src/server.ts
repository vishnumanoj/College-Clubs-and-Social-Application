// import "./Old Models And Routes/StressBusterFiles/node_modules/dotenv/config"
import storyApp,{StoryApp} from "./StressBusterFiles/stressBusterApp";
import app,{App1} from "./app_old";
import http, { Server } from'http'
import io from 'socket.io'
import fs from 'fs'

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

const port2 = StoryApp.instance.port;
const server2 = http.createServer(storyApp);

server2.listen(port2, () => {
    console.log(`server listening on port ${port2} !`);
})
const ios2=io(server2);
ios2.on('connection', (socketServer) => {
    server2.close(() => {
    console.log('Process terminated')
    console.log("Closing Application");
    process.exit(0);
    })
});