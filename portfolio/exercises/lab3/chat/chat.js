var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com');
// When the connection is open, send some data to the server

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
  document.getElementById("chat").innerHTML = e.data;
};

function sendMessage() {
    connection.send(document.getElementById("mychat").value);
}
