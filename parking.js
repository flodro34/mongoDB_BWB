const express = require('express');
const fs = require('fs'); 
const http = require('http');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
 
// App
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extented:true}))

app.get('/', (req, res) => {
 res.send("<h2>Hellowww 🗿 , reservation successfully ! </h2>");
});
 
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

let url = "mongodb://flo34:bibi@mongo:27017"
let MongoClient = require('mongodb').MongoClient


////////////////////////    CREATION DE LA BDD PARKING   ///////////////////////////
// MongoClient.connect(url,function(err, database){
//     if(err) throw err ;
//     let dbo = database.db("parking");
//     console.log("collection created !");
//     // travail sur la base
//     database.close();
// })

//////// SI PAS D'ENREGISTREMENT, PAS DE BASE CREEE  ////////
////////   CREA BDD + COLLECTION   ///////////

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("parkings");
//     var myobj = { 
//         username: "John Doe", 
//         car_immat :" FR 094 DV", 
//         reservation_date : "14-09-2022", 
//         reservation_num : "007", 
//         car_park_num : " 12"
//     };
//     dbo.collection("Parking_1").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//     });
// });


////////////////  CREA NVL COLLECTION + ENREGISTREMENTS MULTIPLES    //////////

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("parkings");
//     var myobj = [
//         {username: "John Doe", car_immat :" FR 094 DV", reservation_date : "14-09-2022", reservation_num : "007", car_park_num : " 12"},
//         {username: "Simon Templar", car_immat :" BN 007 TT", reservation_date : "04-10-2022", reservation_num : "012", car_park_num : " 32"},
//         {username: "Eric Hochet", car_immat :" CC 777 ZZ", reservation_date : "15-11-2022", reservation_num : "301", car_park_num : " 26"},
//         {username: "Tar Tempion", car_immat :" ZZ 753 PP", reservation_date : "02-11-2022", reservation_num : "017", car_park_num : " 27"},
//         {username: "Sarah Connor", car_immat :" HJ 369 ML", reservation_date : "12-03-2023", reservation_num : "112", car_park_num : " 36"},
//         {username: "Lara Croft", car_immat :" KJ 194 RV", reservation_date : "22-11-2022", reservation_num : "911", car_park_num : " 02"},
//         {username: "Mickey Mouse", car_immat :" TT 789 VN", reservation_date : "16-02-2023", reservation_num : "321", car_park_num : " 21"},
//         {username: "Donald Duck", car_immat :" HY 694 IO", reservation_date : "18-01-2023", reservation_num : "123", car_park_num : " 14"},
        
//     ];
//     dbo.collection("Parking_2").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     });
// });

///////////    DELETE 1 ENREGISTREMENT    ///////////

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("parkings");
//     var myquery = { username: "Donald Duck" };
//     dbo.collection("Parking_2").deleteOne(myquery, function(err, obj) {
//       if (err) throw err;
//       console.log("1 document deleted");
//       db.close();
//     });
// });


//########## GET/POST DU FORM #############

// gestion des routes
app.get("/resa",function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile('formParking.html', function(err,data){
        res.end(data);
    })
});

  app.post('/resa',function(req,res){
    //console.log(req.body);

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("parkings");
      var myobj = { 
        username: req.body.username,         
        car_immat: req.body.car_immat,
        reservation_date: req.body.reservation_date,
        reservation_num: req.body.reservation_num,
        car_park_num: req.body.car_park_num
    };
      dbo.collection("Parking_1").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
    
    res.redirect('/');
  });