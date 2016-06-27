import express from 'express';
const router = express.Router();

export default function(app) {
  app.get('/',  function(req, res) {
    res.send({ message: 'hello' });
  });

}
