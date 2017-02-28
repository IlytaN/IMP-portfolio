
var names = [];
var nameInput   = document.getElementById("name");
var messageBox  = document.getElementById("display");

function insert ( ) {
    names.push( nameInput.value );
    clearAndShow();
}

function clearAndShow () {
    nameInput.value = "";
    messageBox.innerHTML = "";
    messageBox.innerHTML += names.join("<br><br>");
}
function getInputElement()
{
  return document.getElementById("name");
}
function getDisplayElement()
{
  return document.getElementById("display");
}
function save()
{
  var nameInput = getInputElement();
  names.push(nameInput.value); console.log(names);
  localStorage.setItem("names", JSON.stringify(names));
  var a = localStorage.getItem("names");
  console.log(a);
}
function load()
{
  var a = JSON.parse(localStorage.getItem("names"));
  console.log(a);
  for (var i = 0; i < a.length; i++) {
    var message = document.createElement('div');
    message.innerHTML = a[i];
    messageBox.appendChild(message);
    console.log(a[i]);
  }
}
