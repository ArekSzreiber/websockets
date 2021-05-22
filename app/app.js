const socket = io('ws://localhost:8080');

socket.on('message', text => {
    const listItem = document.createElement('li');
    listItem.innerText = text;
    document.querySelector('ul').appendChild(listItem);
});

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
};
