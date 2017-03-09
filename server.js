
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
            a1:{
            title:'kokul 1',
            date:"sept1"
            },
            a2:{
            title:'kokul 2',
            date:"sept2"
            },
            a3:{
            title:'kokul 3',
            date:"sept3"
            }
    };

function ctemplate(data)
{
    var title=data.title;
    var date=data.date;
    var template=` <!DOCTYPE html>
    <html>
    <head>
    <title>kokul</title>
    </head>
    <body>
    <h1>hello</h1>
        ${title}
        ${date}
    </body>
    </html>`;
    return template;
}
var count=0;
app.get("/counter", function(req,res) {
    count = count+1;
    res.send(count.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:arname',function (req, res){
    var arname=req.params.arname;
    res.send(ctemplate(article[arname]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
