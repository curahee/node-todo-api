//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
   return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
// have to use update operators like $set
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5abe14251417f7db0c48062d")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    name: "Curahee"
  }, {
    $set: {
      name: "We stand together"
    },
    $inc: {
      age: +1
    }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();


});
