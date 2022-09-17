// Constants
const express = require('express');
const dbu = require('./db_utils');
const mongoose = require('mongoose');

const PORT = 3000;
const HOST = '0.0.0.0';

const Connect = async () => {
  let url = "mongodb://mongo:27017/store";

  try {
    let client = await mongoose.connect( url, {
      authSource: "admin",
      user: 'flo34',
      pass: 'bibi',
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("database is connected !");
  }
  catch (error){
    console.log(error.stack);
  }
}

Connect();

//App
const app = express();


let MongoClient = require('mongodb').MongoClient;

let myindex;

// Schema
// const productSchema = new mongoose.Schema({
//     ref:  String,
//     prix: String,
//     name:  String,
//     desc: String,
//     date: { type: Date, default: Date.now },
//     stock: Number,
//     img: String,
//     tva: Number
// });

// // create Model for products in mongoose
// const Product = mongoose.model('Product', productSchema, 'products');

// let myProduct = new Product ;
// console.log(myProduct)
// myProduct.ref = "ABC999" ;
// myProduct.prix = 129 ;
// myProduct.name = "Arrosoir" ;
// myProduct.desc = "super produit trop bien" ;
// myProduct.stock = 200 ;
// myProduct.img = "/pub/img/myproduct.jpg" ;
// myProduct.tva = 5.5 ;
// // enregistre les infos
// myProduct.save();

const userSchema = new mongoose.Schema({
  name:  String,
  password: String,
  dateinscrip: { type: Date, default: Date.now },
});

// create new user:
const User = mongoose.model('User', userSchema, 'users');

let myuser = new User ;

myuser.name = "Jane Doe";
myuser.password = "1234";

myuser.save();





// dbu.SearchIndexes(function(items) {
//   myindex = items[0]['prod_ndx'];
//   //console.log(items[0]['prod_ndx']);
//   console.log(myindex);
// });


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);