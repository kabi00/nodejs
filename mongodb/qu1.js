// var MongoClient = require('mongodb').MongoClient;
//          //Create a database named "mydb":
//        var url = "mongodb://localhost:27017/mydb";
//
//       MongoClient.connect(url, function(err, db) {
//       if (err) throw err;
//      console.log("Database created!");
//       db.close();
//        });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("music");
//   dbo.createCollection("songdetails", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("music");
//   dbo.collection("songdetails").find({}).toArray(function(err, result) {
// 	if (err) throw err;
// 	console.log(result);
// 	db.close();
//   });
// });


// // var MongoClient = require('mongodb').MongoClient;
// // var url = "mongodb://localhost:27017/";
// //
// // MongoClient.connect(url, function(err, db) {
// //   if (err) throw err;
// //   var dbo = db.db("music");
// //   /*Return only the documents with the address "Park Lane 38":*/
// //   var query = { Musicdirector: "Ilaiyaraja", Singer: "unnikrishnan,Anuradha Sriram" };
// //   dbo.collection("songdetails").find(query).toArray(function(err, result) {
// // 	if (err) throw err;
// // 	console.log(result);
// // 	db.close();
// //   });
// });
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("music");
//   var myquery = { Songname: 'Roja Poonthottam' };
//   dbo.collection("songdetails").deleteOne(myquery, function(err, obj) {
// 	if (err) throw err;
// 	console.log("1 document deleted");
// 	db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("music");
//   var myobj = { Songname: "ammu kuttyee", flim: "jemikaneshanum surilirajan", Musicdirector: "Ilaiyaraja", Singer: "Hariharan"};
//   dbo.collection("songdetails").insertOne(myobj, function(err, res) {
// 	if (err) throw err;
// 	console.log("1 document inserted");
// 	db.close();
//   });
// });


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  dbo.collection("songdetails").find({}, { _id:0,Singer:1,Songname:0, film:0,Musicdirector:0 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
