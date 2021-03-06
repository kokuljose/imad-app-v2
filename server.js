
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require("pg").Pool;
var crypto =require('crypto');

var config= {
    user:"kokuljose",
    database:"kokuljose",
    host:"db.imad.hasura-app.io",
    port:"5432",
    password: 'db-kokuljose-52904'
};
var app = express();
app.use(morgan('combined'));
function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
}

app.get("/hash/:input", function(req,res){
   var hashedString=hash(req.params.input,"thisisrandomstring"); 
   res.send(hashedString);
});














var pool = new Pool(config);
app.get("/test-db",function(req,res){
    pool.query("SELECT * FROM test",function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});


var articles={
        "article1":{
            title:'Article1',
            l1:"hello it's my first article"
         },
        "article2":{
            title:'Article2',
            l1:"hello it's my second article"
        },
        "article3":{
            title:'Article3',
            l1:"hello it's my third article"
        },
        };
function createTemplate(data){
    
    var title=data.title;
    var l1=data.l1;
    var htmlTemplate=
    `<html>
        <a href='/'>Home</a>
         <link href="/ui/style.css" rel="stylesheet" />
    <p class="content1">${title}</p>
    
    <p class="content2">${l1}</p>
    <p class="content3">${l1}</p>
    </html>
    `;
    return htmlTemplate;
} 

var counter=0;
app.get('/counter',function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
    
});
var names=[];
app.get("/submit-name",function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/articles/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  pool.query("SELECT * FROM article WHERE TITLE = '" + req.params.articleName+"'",function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } else {
          if(result.rows.length===0) {
              res.status(404).send("Article Not Found");
              
          } else {
        
          
          var articleData=result.rows[0];
          res.send(createTemplate(articleData));
          }
      }
  });
  
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get("/submit-name",function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
