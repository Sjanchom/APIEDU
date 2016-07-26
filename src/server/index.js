import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from '../api';
import http from 'http';
//import testt from '../server/api/home/index'
const app = express();
//const sss = require('./api/home/index').default;



mongoose.connect('mongodb://localhost:EDU/API', function(err) {
    if (err) {
        console.log('Please check your MongoDB connection', err);
    }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.use(express.static('static'));
app.use(express.static('public'));
//router(app);
//app.use(router);

function execGet(req, res, next) {
    var params = req.params[0].split('/');
    //console.log('params', params);
    console.log(req.params);

    //[0]- empty,[1]-module,[2]-object,[3]-function,[4-n] params..n
    if (params.length < 4)
        res.send({
            code: 530,
            status: "error",
            message: "Invalid parameters!"
        });
    else {
        var obj = require('./api/' + params[1] + '/' + params[2]).default;
        obj = new obj(app);
        //console.log(params[3]);
        var func = obj[params[3]];
        var inputs = [];
        for (var i = 4; i < params.length; i++) {
            if (params[i])
                inputs.push(params[i]);
        }
        console.log('inputs:', inputs);
        func(inputs, function(result) {
            res.send(result);
        });
   }
      //res.send({ message: req.params,params:params });
}


function execPost(req, res, next) {
    var params = req.params[0].split('/');
    console.log(params);
    //[0]- empty,[1]-module,[2]-object,[3]-function,[4-n] params..n
    if (params.length < 4)
        res.send({
            code: 530,
            status: "error",
            message: "Invalid parameters!"
        });
    else {
        try {
            var obj = require('api/' + params[1] + '/' + params[2]);
            obj = new obj(app);
            var func = obj[params[3]];
            func(req.body, function(result) {
                res.send(result);

            });
        } catch (err) {
            res.send({
                code: 500,
                status: "error",
                message: JSON.stringify(err)
            });
        }
    }
}

function executeApi(req, res, next) {
  
    switch (req.method) {
        case "GET":
            execGet(req, res, next);
            break;
        case "POST":
            execPost(req, res, next);
            break;
        case "PUT":
            execPost(req, res, next);
            break;
        case "DELETE":
            execPost(req, res, next);
            break;
    }
}

app.all('*', executeApi);


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
