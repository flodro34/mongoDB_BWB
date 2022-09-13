const express = require('express');
 

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express();
app.get('/', (req, res) => {
 res.send('<h2>Hello World from a DOCKER NODEJS on BWB VPS </h2>');
});
 
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

let url = "mongodb://flo34:bibi@mongo:27017"
let MongoClient = require('mongodb').MongoClient

//insertion unique d'un document : 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});