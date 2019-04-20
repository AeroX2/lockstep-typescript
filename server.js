const express = require('express');
const app = express();
const cors = require('cors');
const ExpressPeerServer = require('peer').ExpressPeerServer;

const server = require('http').createServer(app);
const peerserver = ExpressPeerServer(server, { debug: true });

const lobbies = new Map();

app.use(cors());
app.use(express.json())
app.use('/peerjs', peerserver);

app.get('/', (_, res, _1) => { res.send('Hello world!'); });

app.get('/lobbies', (req, res, _) => {
     res.send({ lobbies: [...lobbies.keys()] });
});
app.post('/create-lobby', (req, res, _) => {
    console.log(req.body)
    let peer_id = req.body.peerId;
    let lobby_name = req.body.lobbyName;
    if (!peer_id || !lobby_name) return;
    
    if (!lobbies.has(lobby_name)) {
        lobbies.set(lobby_name,peer_id)
        res.send({ response: 'ok'});
    } else {
        res.status(409)
        res.send({ error: 'Lobby already exists'});
    }
});
app.post('/connect-lobby', (req, res, _) => {
    let lobby_name = req.body.lobbyName;
    if (!lobby_name) return;

    if (lobbies.has(lobby_name)) {
        res.send({ lobby: lobbies.get(lobby_name) });
    } else {
        res.status(404)
        res.send({ error: 'Lobby not found'});
    }
});

peerserver.on('connection', (client) => {
    console.log('Connection', client)
});

peerserver.on('disconnect', (client) => { 
    console.log('Disconnect', client)
    lobbies.forEach((value, key, map) => {
        if (value === client) lobbies.delete(key)
    })
});

const port = 3000;
server.listen(port, () => {
    console.log(`PeerJS listening on port ${port}!`)
});