var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')
var mongodb = require('mongodb')

var app = express()
//app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

var mongoClient = mongodb.MongoClient;

app.post('/register', function(req, res){
    
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var email = req.body.email;
    
	res.send({message: `hello ${req.body.email} your user was registered with Nmae as ${req.body.uname} and Pwd as ${req.body.upwd} `})
    
    mongoClient.connect("mongodb://localhost:27017/mydb",function (err,db) {
        db.collection("reg_details").insert({'uname':uname,'upwd':upwd, 'email':email});
    });
})

app.listen(8081) 
console.log("server listening at port 8081")