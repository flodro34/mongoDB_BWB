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

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

///// Ajout de plusieurs enregistements
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//       { name: 'John', address: 'Highway 71'},
//       { name: 'Peter', address: 'Lowstreet 4'},
//       { name: 'Amy', address: 'Apple st 652'},
//       { name: 'Hannah', address: 'Mountain 21'},
//       { name: 'Michael', address: 'Valley 345'},
//       { name: 'Sandy', address: 'Ocean blvd 2'},
//       { name: 'Betty', address: 'Green Grass 1'},
//       { name: 'Richard', address: 'Sky st 331'},
//       { name: 'Susan', address: 'One way 98'},
//       { name: 'Vicky', address: 'Yellow Garden 2'},
//       { name: 'Ben', address: 'Park Lane 38'},
//       { name: 'William', address: 'Central st 954'},
//       { name: 'Chuck', address: 'Main Road 989'},
//       { name: 'Viola', address: 'Sideway 1633'}
//     ];
//     dbo.collection("customers").insertMany(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("Number of documents inserted: " + res.insertedCount);
//       db.close();
//     });
// });


////////////////// Up date d'un enregistrement ///////////////////
 MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "blabla" };
    var newvalues = { $set: {name: "John", address: " Paradise St 7" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });
