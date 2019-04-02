const Peer = require('peerjs');

console.log('Starting up');

let peer = new Peer();
peer.on('open', (id: string) => {
  console.log('My peer ID is: ' + id);
});

