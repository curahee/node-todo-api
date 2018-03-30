//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  // delete many delete all matching criteria
  // delete one deletes first matching the criteria not all
  // find one delete, will find and delete and all print the deleted one
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) =>{
  //   console.log(result);
  // });
  db.collection('Todos').findOneAndDelete({text: "eat lunch"}).then((result) =>{
    console.log(result);
  });
  //db.close();


});
