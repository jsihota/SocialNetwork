var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());

app.listen(3001);
console.log("Server running on port 3001");