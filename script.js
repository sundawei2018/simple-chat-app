var socket = io("ws://localhost:3000/");

function showMessage(str, type) {
  var div = document.createElement('div');
  div.innerHTML = str;
  if (type == "enter") {
    div.style.color = "blue";
  }
  else if (type == "leave") {
    div.style.color = "red";
  }
  document.body.appendChild(div);
}

document.getElementById("sendBtn").onclick = function() {
  var txt = document.getElementById("sendTxt").value;
  if (txt) {
    socket.emit('message', txt);
  }
}

socket.on('enter', function(data) {
  showMessage(data, 'enter');
})

socket.on('message', function(data) {
  showMessage(data, 'message');
})

socket.on('leave', function(data) {
  showMessage(data, 'leave');
})
