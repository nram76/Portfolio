const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', (req,res)=> {
    const {name, email, message} = req.body;
    // Save the form data to MongoDB
});

app.listen(3000, () =>{
    console.log('Server is running on port 3000')
});


const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://nramanjulu:KalaKa1212@cluster0.wdrob.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'cluster0.wdrob.mongodb.net';

MongoClient.connect(url, (err, client) => {
    if (err) {
      console.error('Failed to connect to MongoDB:', err);
      return;
    }
    const db = client.db(dbName);
    // Save the form data to MongoDB
    db.collection('submissions').insertOne({ name, email, message }, (err, result) => {
        if (err) {
          console.error('Failed to insert submission into MongoDB:', err);
          res.sendStatus(500);
          return;
        }
        res.sendStatus(200);
      });
  });