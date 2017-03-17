
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
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

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
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
