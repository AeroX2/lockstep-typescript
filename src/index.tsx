import { Network } from './network';

console.log('Starting up');
Network.open_socket()

let connect_button = document.getElementById('connect-button');
connect_button.addEventListener('click', () => {
	let textbox = document.getElementById('textbox') as HTMLInputElement;
	Network.full_connect(textbox.value);

	let start_button = document.getElementById('send-button');
	start_button.addEventListener('click', () => {
		Network.send_all_reliable('start')
	});
});

let fps = 1000/60
let loop = () => {
	setTimeout(() => {
		//Wait for buffers to be filled
		Network.wait_for_buffers();
		
		window.requestAnimationFrame(loop)
	}, fps)
}
