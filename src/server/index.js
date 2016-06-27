import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from '../api';
import http from 'http';
const app = express();




mongoose.connect('mongodb://localhost:EDU/API', function(err) {
  if (err) {
    console.log('Please check your MongoDB connection', err);
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));
router(app);



const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
