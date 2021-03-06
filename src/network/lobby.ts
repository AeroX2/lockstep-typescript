export class Lobby {
	public static PEER_IP = "lockstep.zapto.org";
	public static PEER_PORT = 3000;
    private static SERVER_URL = `http://${Lobby.PEER_IP}:${Lobby.PEER_PORT}`

    public static get_lobbies(peer_id: string): Promise<any> {
        return this.request2('GET', `${Lobby.SERVER_URL}/lobbies`, { peerId: peer_id })
    }

    public static create_lobby(peer_id: string, name: string): Promise<string> {
        return this.request2('POST', `${Lobby.SERVER_URL}/create-lobby`, { peerId: peer_id, lobbyName: name })
    }

    public static connect_lobby(name: string): Promise<any> {
        return this.request2('POST', `${Lobby.SERVER_URL}/connect-lobby`, { lobbyName: name })
    }

    // Using callbacks:
    private static request(
        method: 'GET' | 'POST',
        url: string,
        content?: any,
        callback?: (response: any) => void,
        errorCallback?: (err: any) => void): void {

        const request = new XMLHttpRequest();
        request.open(method, url, true);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                const data = JSON.parse(this.response) as Response;
                callback && callback(data);
            } else {
                // We reached our target server, but it returned an error
            }
        };

        request.onerror = function (err) {
            // There was a connection error of some sort
            errorCallback && errorCallback(err);
        };
        if (method === 'POST') {
            request.setRequestHeader(
                'Content-Type',
                'application/json');
        }
        request.send(JSON.stringify(content));
    }

    // Using promises:
    private static request2(
        method: 'GET' | 'POST',
        url: string,
        content?: any
    ): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.request(method, url, content, resolve, reject);
        });
    }
}
