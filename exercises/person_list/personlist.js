var names   = [];
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
// phan sau chua chay dc
function getInputElement()
{
  return document.getElementById("name");
}
function save()
{
  var nameInput = getInputElement();
  var userString = nameInput.value;

  localStorage.setItem("name" , userString);
  console.log('It is saved');
}
function load()
{
  var nameInput = getInputElement();
  nameInput.value = localStorage.getItem("name");
}

Storage.prototype.setObject = function(key, value)
{
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key)
{
  var value = this.getItem(key);
  return JSON.parse(value);
}
