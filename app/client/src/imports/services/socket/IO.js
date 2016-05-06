import socket from 'socket.io-client';

// simple wrapper around IO
class IO {
  constructor(url) {
    this.socket  =  socket.connect(url);
  }
  getSocket(){
    return this.socket;
  }
}

export default IO;
