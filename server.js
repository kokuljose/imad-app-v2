
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article1={
    title:'Article1',
    l1:"hello it's my first article"
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




app.get('/', function (req, res) {
  res.send(createTemplate(article1));
});
app.get('/article1',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article1.html'));
});
app.get('/article2',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article2.html'));
});
app.get('/article3',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article3.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
