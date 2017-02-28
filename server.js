var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 80));
app.use(express.static(__dirname + '/portfolio'))

app.get('/', function (req,res){
  res.sendFile(__dirname + '/portfolio/index.html');
})

app.listen(app.get('port'), function(){
  console.log("App running in a port: ",app.get('port'));
})
