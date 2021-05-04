import io from "socket.io-client";
import path from 'path'

const socketClient = io.connect('http://localhost:3000',{port:"3000"});
console.log("Communicating to Close Nodejs process")

function sleep(millis:any) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

async function main() {
  socketClient.on('connection', () => {
    console.log("Communicating to close Nodejs process")
  });
  
  await sleep(100);
  
  socketClient.off('connection')
  socketClient.disconnect()
}

main()
