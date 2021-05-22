const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.onmessage = (message) => {
    const { data } = message;
    console.log('Message data from server ', data);
    console.log('Full message object: ', message);
};

document.querySelector('button').onclick = () => {
    socket.send('hello');
}
